import { useState, useEffect } from "react";
import { useRouter } from "next/router"; // Changed to use Next.js routing
import {
  User,
  deleteUser,
  reauthenticateWithCredential,
  EmailAuthProvider,
  updateProfile,
  signOut,
} from "firebase/auth";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { auth } from "@/Backend/firebase/config";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";

export default function ProfilePage() {
  const [user, setUser] = useState<User | null>(null);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [isEditingName, setIsEditingName] = useState(false);
  const [newName, setNewName] = useState("");
  const router = useRouter();

  useEffect(() => {
    // Listen for authentication state changes
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
      if (!user) {
        router.push("/"); // Use Next.js routing
      } else {
        setNewName(user.displayName || "");
      }
    });

    return () => unsubscribe();
  }, [router]);

  const handleDeleteAccount = async () => {
    if (!user) return;

    try {
      if (user.email) {
        const credential = EmailAuthProvider.credential(user.email, password);
        await reauthenticateWithCredential(user, credential);
      }

      await deleteUser(user);
      toast({
        title: "Account Deleted",
        description: "Your account has been successfully deleted.",
      });
      router.push("/"); // Use Next.js routing
    } catch (error: any) {
      console.error("Account deletion error:", error);
      setError(error.message || "Failed to delete account. Please try again.");
    }
  };

  const handleUpdateName = async () => {
    if (!user) return;

    try {
      await updateProfile(user, { displayName: newName });
      setUser({ ...user, displayName: newName });
      setIsEditingName(false);
      toast({
        title: "Name Updated",
        description: "Your display name has been successfully updated.",
      });
    } catch (error: any) {
      console.error("Name update error:", error);
      setError(error.message || "Failed to update name. Please try again.");
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      toast({
        title: "Logged Out",
        description: "You have been successfully logged out.",
      });
      router.push("/"); // Use Next.js routing
    } catch (error: any) {
      console.error("Logout error:", error);
      setError(error.message || "Failed to log out. Please try again.");
    }
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="max-w-md mx-auto">
        <CardHeader>
          <CardTitle>User Profile</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label>Name</Label>
            {isEditingName ? (
              <div className="flex items-center space-x-2">
                <Input
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                  className="flex-grow"
                />
                <Button onClick={handleUpdateName}>Save</Button>
                <Button variant="outline" onClick={() => setIsEditingName(false)}>Cancel</Button>
              </div>
            ) : (
              <div className="flex items-center justify-between bg-muted p-2 rounded">
                <span>{user.displayName || "No name set"}</span>
                <Button variant="ghost" onClick={() => setIsEditingName(true)}>Edit</Button>
              </div>
            )}
          </div>

          <div className="space-y-2">
            <Label>Email</Label>
            <p className="bg-muted p-2 rounded">{user.email}</p>
          </div>

          <div className="space-y-2">
            <Label>User ID</Label>
            <p className="bg-muted p-2 rounded">{user.uid}</p>
          </div>

          <div className="space-y-2">
            <Label>Account Created</Label>
            <p className="bg-muted p-2 rounded">{user.metadata.creationTime}</p>
          </div>

          <Button onClick={handleLogout} className="w-full">Log Out</Button>

          <Dialog
            open={isDeleteDialogOpen}
            onOpenChange={setIsDeleteDialogOpen}
          >
            <DialogTrigger asChild>
              <Button variant="destructive" className="w-full">
                Delete Account
              </Button>
            </DialogTrigger>
            <DialogContent className="fixed z-50 w-full max-w-[425px] rounded-lg bg-white p-6 shadow-xl dark:bg-gray-900 border border-gray-200 dark:border-gray-700">
              <DialogHeader>
                <DialogTitle>Delete Account</DialogTitle>
                <DialogDescription>
                  This will permanently delete your account. This action cannot
                  be undone.
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="delete-password">
                    Confirm Password to Delete Account
                  </Label>
                  <Input
                    id="delete-password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                  />
                </div>

                {error && <p className="text-red-500 text-sm">{error}</p>}
              </div>

              <DialogFooter>
                <DialogClose asChild>
                  <Button variant="outline">Cancel</Button>
                </DialogClose>
                <Button
                  variant="destructive"
                  onClick={handleDeleteAccount}
                  disabled={!password}
                >
                  Confirm Delete
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </CardContent>
      </Card>
    </div>
  );
}
