
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model listofscrapers
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 */
export type listofscrapers = $Result.DefaultSelection<Prisma.$listofscrapersPayload>
/**
 * Model product_prices
 * 
 */
export type product_prices = $Result.DefaultSelection<Prisma.$product_pricesPayload>
/**
 * Model products
 * 
 */
export type products = $Result.DefaultSelection<Prisma.$productsPayload>
/**
 * Model shahzar_table
 * 
 */
export type shahzar_table = $Result.DefaultSelection<Prisma.$shahzar_tablePayload>
/**
 * Model spider_logs
 * 
 */
export type spider_logs = $Result.DefaultSelection<Prisma.$spider_logsPayload>
/**
 * Model stores
 * 
 */
export type stores = $Result.DefaultSelection<Prisma.$storesPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Listofscrapers
 * const listofscrapers = await prisma.listofscrapers.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Listofscrapers
   * const listofscrapers = await prisma.listofscrapers.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.listofscrapers`: Exposes CRUD operations for the **listofscrapers** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Listofscrapers
    * const listofscrapers = await prisma.listofscrapers.findMany()
    * ```
    */
  get listofscrapers(): Prisma.listofscrapersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.product_prices`: Exposes CRUD operations for the **product_prices** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Product_prices
    * const product_prices = await prisma.product_prices.findMany()
    * ```
    */
  get product_prices(): Prisma.product_pricesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.products`: Exposes CRUD operations for the **products** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.products.findMany()
    * ```
    */
  get products(): Prisma.productsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.shahzar_table`: Exposes CRUD operations for the **shahzar_table** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Shahzar_tables
    * const shahzar_tables = await prisma.shahzar_table.findMany()
    * ```
    */
  get shahzar_table(): Prisma.shahzar_tableDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.spider_logs`: Exposes CRUD operations for the **spider_logs** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Spider_logs
    * const spider_logs = await prisma.spider_logs.findMany()
    * ```
    */
  get spider_logs(): Prisma.spider_logsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.stores`: Exposes CRUD operations for the **stores** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Stores
    * const stores = await prisma.stores.findMany()
    * ```
    */
  get stores(): Prisma.storesDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    listofscrapers: 'listofscrapers',
    product_prices: 'product_prices',
    products: 'products',
    shahzar_table: 'shahzar_table',
    spider_logs: 'spider_logs',
    stores: 'stores'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "listofscrapers" | "product_prices" | "products" | "shahzar_table" | "spider_logs" | "stores"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      listofscrapers: {
        payload: Prisma.$listofscrapersPayload<ExtArgs>
        fields: Prisma.listofscrapersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.listofscrapersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$listofscrapersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.listofscrapersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$listofscrapersPayload>
          }
          findFirst: {
            args: Prisma.listofscrapersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$listofscrapersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.listofscrapersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$listofscrapersPayload>
          }
          findMany: {
            args: Prisma.listofscrapersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$listofscrapersPayload>[]
          }
          create: {
            args: Prisma.listofscrapersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$listofscrapersPayload>
          }
          createMany: {
            args: Prisma.listofscrapersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.listofscrapersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$listofscrapersPayload>[]
          }
          delete: {
            args: Prisma.listofscrapersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$listofscrapersPayload>
          }
          update: {
            args: Prisma.listofscrapersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$listofscrapersPayload>
          }
          deleteMany: {
            args: Prisma.listofscrapersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.listofscrapersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.listofscrapersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$listofscrapersPayload>[]
          }
          upsert: {
            args: Prisma.listofscrapersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$listofscrapersPayload>
          }
          aggregate: {
            args: Prisma.ListofscrapersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateListofscrapers>
          }
          groupBy: {
            args: Prisma.listofscrapersGroupByArgs<ExtArgs>
            result: $Utils.Optional<ListofscrapersGroupByOutputType>[]
          }
          count: {
            args: Prisma.listofscrapersCountArgs<ExtArgs>
            result: $Utils.Optional<ListofscrapersCountAggregateOutputType> | number
          }
        }
      }
      product_prices: {
        payload: Prisma.$product_pricesPayload<ExtArgs>
        fields: Prisma.product_pricesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.product_pricesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_pricesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.product_pricesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_pricesPayload>
          }
          findFirst: {
            args: Prisma.product_pricesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_pricesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.product_pricesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_pricesPayload>
          }
          findMany: {
            args: Prisma.product_pricesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_pricesPayload>[]
          }
          create: {
            args: Prisma.product_pricesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_pricesPayload>
          }
          createMany: {
            args: Prisma.product_pricesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.product_pricesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_pricesPayload>[]
          }
          delete: {
            args: Prisma.product_pricesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_pricesPayload>
          }
          update: {
            args: Prisma.product_pricesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_pricesPayload>
          }
          deleteMany: {
            args: Prisma.product_pricesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.product_pricesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.product_pricesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_pricesPayload>[]
          }
          upsert: {
            args: Prisma.product_pricesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_pricesPayload>
          }
          aggregate: {
            args: Prisma.Product_pricesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduct_prices>
          }
          groupBy: {
            args: Prisma.product_pricesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Product_pricesGroupByOutputType>[]
          }
          count: {
            args: Prisma.product_pricesCountArgs<ExtArgs>
            result: $Utils.Optional<Product_pricesCountAggregateOutputType> | number
          }
        }
      }
      products: {
        payload: Prisma.$productsPayload<ExtArgs>
        fields: Prisma.productsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.productsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.productsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          findFirst: {
            args: Prisma.productsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.productsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          findMany: {
            args: Prisma.productsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>[]
          }
          create: {
            args: Prisma.productsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          createMany: {
            args: Prisma.productsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.productsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>[]
          }
          delete: {
            args: Prisma.productsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          update: {
            args: Prisma.productsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          deleteMany: {
            args: Prisma.productsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.productsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.productsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>[]
          }
          upsert: {
            args: Prisma.productsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          aggregate: {
            args: Prisma.ProductsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProducts>
          }
          groupBy: {
            args: Prisma.productsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductsGroupByOutputType>[]
          }
          count: {
            args: Prisma.productsCountArgs<ExtArgs>
            result: $Utils.Optional<ProductsCountAggregateOutputType> | number
          }
        }
      }
      shahzar_table: {
        payload: Prisma.$shahzar_tablePayload<ExtArgs>
        fields: Prisma.shahzar_tableFieldRefs
        operations: {
          findUnique: {
            args: Prisma.shahzar_tableFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$shahzar_tablePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.shahzar_tableFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$shahzar_tablePayload>
          }
          findFirst: {
            args: Prisma.shahzar_tableFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$shahzar_tablePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.shahzar_tableFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$shahzar_tablePayload>
          }
          findMany: {
            args: Prisma.shahzar_tableFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$shahzar_tablePayload>[]
          }
          create: {
            args: Prisma.shahzar_tableCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$shahzar_tablePayload>
          }
          createMany: {
            args: Prisma.shahzar_tableCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.shahzar_tableCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$shahzar_tablePayload>[]
          }
          delete: {
            args: Prisma.shahzar_tableDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$shahzar_tablePayload>
          }
          update: {
            args: Prisma.shahzar_tableUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$shahzar_tablePayload>
          }
          deleteMany: {
            args: Prisma.shahzar_tableDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.shahzar_tableUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.shahzar_tableUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$shahzar_tablePayload>[]
          }
          upsert: {
            args: Prisma.shahzar_tableUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$shahzar_tablePayload>
          }
          aggregate: {
            args: Prisma.Shahzar_tableAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateShahzar_table>
          }
          groupBy: {
            args: Prisma.shahzar_tableGroupByArgs<ExtArgs>
            result: $Utils.Optional<Shahzar_tableGroupByOutputType>[]
          }
          count: {
            args: Prisma.shahzar_tableCountArgs<ExtArgs>
            result: $Utils.Optional<Shahzar_tableCountAggregateOutputType> | number
          }
        }
      }
      spider_logs: {
        payload: Prisma.$spider_logsPayload<ExtArgs>
        fields: Prisma.spider_logsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.spider_logsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$spider_logsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.spider_logsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$spider_logsPayload>
          }
          findFirst: {
            args: Prisma.spider_logsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$spider_logsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.spider_logsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$spider_logsPayload>
          }
          findMany: {
            args: Prisma.spider_logsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$spider_logsPayload>[]
          }
          create: {
            args: Prisma.spider_logsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$spider_logsPayload>
          }
          createMany: {
            args: Prisma.spider_logsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.spider_logsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$spider_logsPayload>[]
          }
          delete: {
            args: Prisma.spider_logsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$spider_logsPayload>
          }
          update: {
            args: Prisma.spider_logsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$spider_logsPayload>
          }
          deleteMany: {
            args: Prisma.spider_logsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.spider_logsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.spider_logsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$spider_logsPayload>[]
          }
          upsert: {
            args: Prisma.spider_logsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$spider_logsPayload>
          }
          aggregate: {
            args: Prisma.Spider_logsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSpider_logs>
          }
          groupBy: {
            args: Prisma.spider_logsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Spider_logsGroupByOutputType>[]
          }
          count: {
            args: Prisma.spider_logsCountArgs<ExtArgs>
            result: $Utils.Optional<Spider_logsCountAggregateOutputType> | number
          }
        }
      }
      stores: {
        payload: Prisma.$storesPayload<ExtArgs>
        fields: Prisma.storesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.storesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$storesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.storesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$storesPayload>
          }
          findFirst: {
            args: Prisma.storesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$storesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.storesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$storesPayload>
          }
          findMany: {
            args: Prisma.storesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$storesPayload>[]
          }
          create: {
            args: Prisma.storesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$storesPayload>
          }
          createMany: {
            args: Prisma.storesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.storesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$storesPayload>[]
          }
          delete: {
            args: Prisma.storesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$storesPayload>
          }
          update: {
            args: Prisma.storesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$storesPayload>
          }
          deleteMany: {
            args: Prisma.storesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.storesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.storesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$storesPayload>[]
          }
          upsert: {
            args: Prisma.storesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$storesPayload>
          }
          aggregate: {
            args: Prisma.StoresAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStores>
          }
          groupBy: {
            args: Prisma.storesGroupByArgs<ExtArgs>
            result: $Utils.Optional<StoresGroupByOutputType>[]
          }
          count: {
            args: Prisma.storesCountArgs<ExtArgs>
            result: $Utils.Optional<StoresCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    listofscrapers?: listofscrapersOmit
    product_prices?: product_pricesOmit
    products?: productsOmit
    shahzar_table?: shahzar_tableOmit
    spider_logs?: spider_logsOmit
    stores?: storesOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ListofscrapersCountOutputType
   */

  export type ListofscrapersCountOutputType = {
    spider_logs: number
  }

  export type ListofscrapersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    spider_logs?: boolean | ListofscrapersCountOutputTypeCountSpider_logsArgs
  }

  // Custom InputTypes
  /**
   * ListofscrapersCountOutputType without action
   */
  export type ListofscrapersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListofscrapersCountOutputType
     */
    select?: ListofscrapersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ListofscrapersCountOutputType without action
   */
  export type ListofscrapersCountOutputTypeCountSpider_logsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: spider_logsWhereInput
  }


  /**
   * Count Type ProductsCountOutputType
   */

  export type ProductsCountOutputType = {
    product_prices: number
  }

  export type ProductsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product_prices?: boolean | ProductsCountOutputTypeCountProduct_pricesArgs
  }

  // Custom InputTypes
  /**
   * ProductsCountOutputType without action
   */
  export type ProductsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductsCountOutputType
     */
    select?: ProductsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductsCountOutputType without action
   */
  export type ProductsCountOutputTypeCountProduct_pricesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: product_pricesWhereInput
  }


  /**
   * Count Type StoresCountOutputType
   */

  export type StoresCountOutputType = {
    products: number
  }

  export type StoresCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | StoresCountOutputTypeCountProductsArgs
  }

  // Custom InputTypes
  /**
   * StoresCountOutputType without action
   */
  export type StoresCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoresCountOutputType
     */
    select?: StoresCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StoresCountOutputType without action
   */
  export type StoresCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: productsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model listofscrapers
   */

  export type AggregateListofscrapers = {
    _count: ListofscrapersCountAggregateOutputType | null
    _avg: ListofscrapersAvgAggregateOutputType | null
    _sum: ListofscrapersSumAggregateOutputType | null
    _min: ListofscrapersMinAggregateOutputType | null
    _max: ListofscrapersMaxAggregateOutputType | null
  }

  export type ListofscrapersAvgAggregateOutputType = {
    id: number | null
  }

  export type ListofscrapersSumAggregateOutputType = {
    id: number | null
  }

  export type ListofscrapersMinAggregateOutputType = {
    id: number | null
    name: string | null
    status: string | null
    created_on: Date | null
    last_modified: Date | null
    last_ran: Date | null
  }

  export type ListofscrapersMaxAggregateOutputType = {
    id: number | null
    name: string | null
    status: string | null
    created_on: Date | null
    last_modified: Date | null
    last_ran: Date | null
  }

  export type ListofscrapersCountAggregateOutputType = {
    id: number
    name: number
    status: number
    created_on: number
    last_modified: number
    last_ran: number
    _all: number
  }


  export type ListofscrapersAvgAggregateInputType = {
    id?: true
  }

  export type ListofscrapersSumAggregateInputType = {
    id?: true
  }

  export type ListofscrapersMinAggregateInputType = {
    id?: true
    name?: true
    status?: true
    created_on?: true
    last_modified?: true
    last_ran?: true
  }

  export type ListofscrapersMaxAggregateInputType = {
    id?: true
    name?: true
    status?: true
    created_on?: true
    last_modified?: true
    last_ran?: true
  }

  export type ListofscrapersCountAggregateInputType = {
    id?: true
    name?: true
    status?: true
    created_on?: true
    last_modified?: true
    last_ran?: true
    _all?: true
  }

  export type ListofscrapersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which listofscrapers to aggregate.
     */
    where?: listofscrapersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of listofscrapers to fetch.
     */
    orderBy?: listofscrapersOrderByWithRelationInput | listofscrapersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: listofscrapersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` listofscrapers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` listofscrapers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned listofscrapers
    **/
    _count?: true | ListofscrapersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ListofscrapersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ListofscrapersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ListofscrapersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ListofscrapersMaxAggregateInputType
  }

  export type GetListofscrapersAggregateType<T extends ListofscrapersAggregateArgs> = {
        [P in keyof T & keyof AggregateListofscrapers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateListofscrapers[P]>
      : GetScalarType<T[P], AggregateListofscrapers[P]>
  }




  export type listofscrapersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: listofscrapersWhereInput
    orderBy?: listofscrapersOrderByWithAggregationInput | listofscrapersOrderByWithAggregationInput[]
    by: ListofscrapersScalarFieldEnum[] | ListofscrapersScalarFieldEnum
    having?: listofscrapersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ListofscrapersCountAggregateInputType | true
    _avg?: ListofscrapersAvgAggregateInputType
    _sum?: ListofscrapersSumAggregateInputType
    _min?: ListofscrapersMinAggregateInputType
    _max?: ListofscrapersMaxAggregateInputType
  }

  export type ListofscrapersGroupByOutputType = {
    id: number
    name: string
    status: string | null
    created_on: Date
    last_modified: Date | null
    last_ran: Date | null
    _count: ListofscrapersCountAggregateOutputType | null
    _avg: ListofscrapersAvgAggregateOutputType | null
    _sum: ListofscrapersSumAggregateOutputType | null
    _min: ListofscrapersMinAggregateOutputType | null
    _max: ListofscrapersMaxAggregateOutputType | null
  }

  type GetListofscrapersGroupByPayload<T extends listofscrapersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ListofscrapersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ListofscrapersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ListofscrapersGroupByOutputType[P]>
            : GetScalarType<T[P], ListofscrapersGroupByOutputType[P]>
        }
      >
    >


  export type listofscrapersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    status?: boolean
    created_on?: boolean
    last_modified?: boolean
    last_ran?: boolean
    spider_logs?: boolean | listofscrapers$spider_logsArgs<ExtArgs>
    _count?: boolean | ListofscrapersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["listofscrapers"]>

  export type listofscrapersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    status?: boolean
    created_on?: boolean
    last_modified?: boolean
    last_ran?: boolean
  }, ExtArgs["result"]["listofscrapers"]>

  export type listofscrapersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    status?: boolean
    created_on?: boolean
    last_modified?: boolean
    last_ran?: boolean
  }, ExtArgs["result"]["listofscrapers"]>

  export type listofscrapersSelectScalar = {
    id?: boolean
    name?: boolean
    status?: boolean
    created_on?: boolean
    last_modified?: boolean
    last_ran?: boolean
  }

  export type listofscrapersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "status" | "created_on" | "last_modified" | "last_ran", ExtArgs["result"]["listofscrapers"]>
  export type listofscrapersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    spider_logs?: boolean | listofscrapers$spider_logsArgs<ExtArgs>
    _count?: boolean | ListofscrapersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type listofscrapersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type listofscrapersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $listofscrapersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "listofscrapers"
    objects: {
      spider_logs: Prisma.$spider_logsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      status: string | null
      created_on: Date
      last_modified: Date | null
      last_ran: Date | null
    }, ExtArgs["result"]["listofscrapers"]>
    composites: {}
  }

  type listofscrapersGetPayload<S extends boolean | null | undefined | listofscrapersDefaultArgs> = $Result.GetResult<Prisma.$listofscrapersPayload, S>

  type listofscrapersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<listofscrapersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ListofscrapersCountAggregateInputType | true
    }

  export interface listofscrapersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['listofscrapers'], meta: { name: 'listofscrapers' } }
    /**
     * Find zero or one Listofscrapers that matches the filter.
     * @param {listofscrapersFindUniqueArgs} args - Arguments to find a Listofscrapers
     * @example
     * // Get one Listofscrapers
     * const listofscrapers = await prisma.listofscrapers.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends listofscrapersFindUniqueArgs>(args: SelectSubset<T, listofscrapersFindUniqueArgs<ExtArgs>>): Prisma__listofscrapersClient<$Result.GetResult<Prisma.$listofscrapersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Listofscrapers that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {listofscrapersFindUniqueOrThrowArgs} args - Arguments to find a Listofscrapers
     * @example
     * // Get one Listofscrapers
     * const listofscrapers = await prisma.listofscrapers.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends listofscrapersFindUniqueOrThrowArgs>(args: SelectSubset<T, listofscrapersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__listofscrapersClient<$Result.GetResult<Prisma.$listofscrapersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Listofscrapers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {listofscrapersFindFirstArgs} args - Arguments to find a Listofscrapers
     * @example
     * // Get one Listofscrapers
     * const listofscrapers = await prisma.listofscrapers.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends listofscrapersFindFirstArgs>(args?: SelectSubset<T, listofscrapersFindFirstArgs<ExtArgs>>): Prisma__listofscrapersClient<$Result.GetResult<Prisma.$listofscrapersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Listofscrapers that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {listofscrapersFindFirstOrThrowArgs} args - Arguments to find a Listofscrapers
     * @example
     * // Get one Listofscrapers
     * const listofscrapers = await prisma.listofscrapers.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends listofscrapersFindFirstOrThrowArgs>(args?: SelectSubset<T, listofscrapersFindFirstOrThrowArgs<ExtArgs>>): Prisma__listofscrapersClient<$Result.GetResult<Prisma.$listofscrapersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Listofscrapers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {listofscrapersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Listofscrapers
     * const listofscrapers = await prisma.listofscrapers.findMany()
     * 
     * // Get first 10 Listofscrapers
     * const listofscrapers = await prisma.listofscrapers.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const listofscrapersWithIdOnly = await prisma.listofscrapers.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends listofscrapersFindManyArgs>(args?: SelectSubset<T, listofscrapersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$listofscrapersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Listofscrapers.
     * @param {listofscrapersCreateArgs} args - Arguments to create a Listofscrapers.
     * @example
     * // Create one Listofscrapers
     * const Listofscrapers = await prisma.listofscrapers.create({
     *   data: {
     *     // ... data to create a Listofscrapers
     *   }
     * })
     * 
     */
    create<T extends listofscrapersCreateArgs>(args: SelectSubset<T, listofscrapersCreateArgs<ExtArgs>>): Prisma__listofscrapersClient<$Result.GetResult<Prisma.$listofscrapersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Listofscrapers.
     * @param {listofscrapersCreateManyArgs} args - Arguments to create many Listofscrapers.
     * @example
     * // Create many Listofscrapers
     * const listofscrapers = await prisma.listofscrapers.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends listofscrapersCreateManyArgs>(args?: SelectSubset<T, listofscrapersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Listofscrapers and returns the data saved in the database.
     * @param {listofscrapersCreateManyAndReturnArgs} args - Arguments to create many Listofscrapers.
     * @example
     * // Create many Listofscrapers
     * const listofscrapers = await prisma.listofscrapers.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Listofscrapers and only return the `id`
     * const listofscrapersWithIdOnly = await prisma.listofscrapers.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends listofscrapersCreateManyAndReturnArgs>(args?: SelectSubset<T, listofscrapersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$listofscrapersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Listofscrapers.
     * @param {listofscrapersDeleteArgs} args - Arguments to delete one Listofscrapers.
     * @example
     * // Delete one Listofscrapers
     * const Listofscrapers = await prisma.listofscrapers.delete({
     *   where: {
     *     // ... filter to delete one Listofscrapers
     *   }
     * })
     * 
     */
    delete<T extends listofscrapersDeleteArgs>(args: SelectSubset<T, listofscrapersDeleteArgs<ExtArgs>>): Prisma__listofscrapersClient<$Result.GetResult<Prisma.$listofscrapersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Listofscrapers.
     * @param {listofscrapersUpdateArgs} args - Arguments to update one Listofscrapers.
     * @example
     * // Update one Listofscrapers
     * const listofscrapers = await prisma.listofscrapers.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends listofscrapersUpdateArgs>(args: SelectSubset<T, listofscrapersUpdateArgs<ExtArgs>>): Prisma__listofscrapersClient<$Result.GetResult<Prisma.$listofscrapersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Listofscrapers.
     * @param {listofscrapersDeleteManyArgs} args - Arguments to filter Listofscrapers to delete.
     * @example
     * // Delete a few Listofscrapers
     * const { count } = await prisma.listofscrapers.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends listofscrapersDeleteManyArgs>(args?: SelectSubset<T, listofscrapersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Listofscrapers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {listofscrapersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Listofscrapers
     * const listofscrapers = await prisma.listofscrapers.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends listofscrapersUpdateManyArgs>(args: SelectSubset<T, listofscrapersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Listofscrapers and returns the data updated in the database.
     * @param {listofscrapersUpdateManyAndReturnArgs} args - Arguments to update many Listofscrapers.
     * @example
     * // Update many Listofscrapers
     * const listofscrapers = await prisma.listofscrapers.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Listofscrapers and only return the `id`
     * const listofscrapersWithIdOnly = await prisma.listofscrapers.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends listofscrapersUpdateManyAndReturnArgs>(args: SelectSubset<T, listofscrapersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$listofscrapersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Listofscrapers.
     * @param {listofscrapersUpsertArgs} args - Arguments to update or create a Listofscrapers.
     * @example
     * // Update or create a Listofscrapers
     * const listofscrapers = await prisma.listofscrapers.upsert({
     *   create: {
     *     // ... data to create a Listofscrapers
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Listofscrapers we want to update
     *   }
     * })
     */
    upsert<T extends listofscrapersUpsertArgs>(args: SelectSubset<T, listofscrapersUpsertArgs<ExtArgs>>): Prisma__listofscrapersClient<$Result.GetResult<Prisma.$listofscrapersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Listofscrapers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {listofscrapersCountArgs} args - Arguments to filter Listofscrapers to count.
     * @example
     * // Count the number of Listofscrapers
     * const count = await prisma.listofscrapers.count({
     *   where: {
     *     // ... the filter for the Listofscrapers we want to count
     *   }
     * })
    **/
    count<T extends listofscrapersCountArgs>(
      args?: Subset<T, listofscrapersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ListofscrapersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Listofscrapers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListofscrapersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ListofscrapersAggregateArgs>(args: Subset<T, ListofscrapersAggregateArgs>): Prisma.PrismaPromise<GetListofscrapersAggregateType<T>>

    /**
     * Group by Listofscrapers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {listofscrapersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends listofscrapersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: listofscrapersGroupByArgs['orderBy'] }
        : { orderBy?: listofscrapersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, listofscrapersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetListofscrapersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the listofscrapers model
   */
  readonly fields: listofscrapersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for listofscrapers.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__listofscrapersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    spider_logs<T extends listofscrapers$spider_logsArgs<ExtArgs> = {}>(args?: Subset<T, listofscrapers$spider_logsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$spider_logsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the listofscrapers model
   */
  interface listofscrapersFieldRefs {
    readonly id: FieldRef<"listofscrapers", 'Int'>
    readonly name: FieldRef<"listofscrapers", 'String'>
    readonly status: FieldRef<"listofscrapers", 'String'>
    readonly created_on: FieldRef<"listofscrapers", 'DateTime'>
    readonly last_modified: FieldRef<"listofscrapers", 'DateTime'>
    readonly last_ran: FieldRef<"listofscrapers", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * listofscrapers findUnique
   */
  export type listofscrapersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the listofscrapers
     */
    select?: listofscrapersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the listofscrapers
     */
    omit?: listofscrapersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: listofscrapersInclude<ExtArgs> | null
    /**
     * Filter, which listofscrapers to fetch.
     */
    where: listofscrapersWhereUniqueInput
  }

  /**
   * listofscrapers findUniqueOrThrow
   */
  export type listofscrapersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the listofscrapers
     */
    select?: listofscrapersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the listofscrapers
     */
    omit?: listofscrapersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: listofscrapersInclude<ExtArgs> | null
    /**
     * Filter, which listofscrapers to fetch.
     */
    where: listofscrapersWhereUniqueInput
  }

  /**
   * listofscrapers findFirst
   */
  export type listofscrapersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the listofscrapers
     */
    select?: listofscrapersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the listofscrapers
     */
    omit?: listofscrapersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: listofscrapersInclude<ExtArgs> | null
    /**
     * Filter, which listofscrapers to fetch.
     */
    where?: listofscrapersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of listofscrapers to fetch.
     */
    orderBy?: listofscrapersOrderByWithRelationInput | listofscrapersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for listofscrapers.
     */
    cursor?: listofscrapersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` listofscrapers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` listofscrapers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of listofscrapers.
     */
    distinct?: ListofscrapersScalarFieldEnum | ListofscrapersScalarFieldEnum[]
  }

  /**
   * listofscrapers findFirstOrThrow
   */
  export type listofscrapersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the listofscrapers
     */
    select?: listofscrapersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the listofscrapers
     */
    omit?: listofscrapersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: listofscrapersInclude<ExtArgs> | null
    /**
     * Filter, which listofscrapers to fetch.
     */
    where?: listofscrapersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of listofscrapers to fetch.
     */
    orderBy?: listofscrapersOrderByWithRelationInput | listofscrapersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for listofscrapers.
     */
    cursor?: listofscrapersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` listofscrapers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` listofscrapers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of listofscrapers.
     */
    distinct?: ListofscrapersScalarFieldEnum | ListofscrapersScalarFieldEnum[]
  }

  /**
   * listofscrapers findMany
   */
  export type listofscrapersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the listofscrapers
     */
    select?: listofscrapersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the listofscrapers
     */
    omit?: listofscrapersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: listofscrapersInclude<ExtArgs> | null
    /**
     * Filter, which listofscrapers to fetch.
     */
    where?: listofscrapersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of listofscrapers to fetch.
     */
    orderBy?: listofscrapersOrderByWithRelationInput | listofscrapersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing listofscrapers.
     */
    cursor?: listofscrapersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` listofscrapers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` listofscrapers.
     */
    skip?: number
    distinct?: ListofscrapersScalarFieldEnum | ListofscrapersScalarFieldEnum[]
  }

  /**
   * listofscrapers create
   */
  export type listofscrapersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the listofscrapers
     */
    select?: listofscrapersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the listofscrapers
     */
    omit?: listofscrapersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: listofscrapersInclude<ExtArgs> | null
    /**
     * The data needed to create a listofscrapers.
     */
    data: XOR<listofscrapersCreateInput, listofscrapersUncheckedCreateInput>
  }

  /**
   * listofscrapers createMany
   */
  export type listofscrapersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many listofscrapers.
     */
    data: listofscrapersCreateManyInput | listofscrapersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * listofscrapers createManyAndReturn
   */
  export type listofscrapersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the listofscrapers
     */
    select?: listofscrapersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the listofscrapers
     */
    omit?: listofscrapersOmit<ExtArgs> | null
    /**
     * The data used to create many listofscrapers.
     */
    data: listofscrapersCreateManyInput | listofscrapersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * listofscrapers update
   */
  export type listofscrapersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the listofscrapers
     */
    select?: listofscrapersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the listofscrapers
     */
    omit?: listofscrapersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: listofscrapersInclude<ExtArgs> | null
    /**
     * The data needed to update a listofscrapers.
     */
    data: XOR<listofscrapersUpdateInput, listofscrapersUncheckedUpdateInput>
    /**
     * Choose, which listofscrapers to update.
     */
    where: listofscrapersWhereUniqueInput
  }

  /**
   * listofscrapers updateMany
   */
  export type listofscrapersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update listofscrapers.
     */
    data: XOR<listofscrapersUpdateManyMutationInput, listofscrapersUncheckedUpdateManyInput>
    /**
     * Filter which listofscrapers to update
     */
    where?: listofscrapersWhereInput
    /**
     * Limit how many listofscrapers to update.
     */
    limit?: number
  }

  /**
   * listofscrapers updateManyAndReturn
   */
  export type listofscrapersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the listofscrapers
     */
    select?: listofscrapersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the listofscrapers
     */
    omit?: listofscrapersOmit<ExtArgs> | null
    /**
     * The data used to update listofscrapers.
     */
    data: XOR<listofscrapersUpdateManyMutationInput, listofscrapersUncheckedUpdateManyInput>
    /**
     * Filter which listofscrapers to update
     */
    where?: listofscrapersWhereInput
    /**
     * Limit how many listofscrapers to update.
     */
    limit?: number
  }

  /**
   * listofscrapers upsert
   */
  export type listofscrapersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the listofscrapers
     */
    select?: listofscrapersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the listofscrapers
     */
    omit?: listofscrapersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: listofscrapersInclude<ExtArgs> | null
    /**
     * The filter to search for the listofscrapers to update in case it exists.
     */
    where: listofscrapersWhereUniqueInput
    /**
     * In case the listofscrapers found by the `where` argument doesn't exist, create a new listofscrapers with this data.
     */
    create: XOR<listofscrapersCreateInput, listofscrapersUncheckedCreateInput>
    /**
     * In case the listofscrapers was found with the provided `where` argument, update it with this data.
     */
    update: XOR<listofscrapersUpdateInput, listofscrapersUncheckedUpdateInput>
  }

  /**
   * listofscrapers delete
   */
  export type listofscrapersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the listofscrapers
     */
    select?: listofscrapersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the listofscrapers
     */
    omit?: listofscrapersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: listofscrapersInclude<ExtArgs> | null
    /**
     * Filter which listofscrapers to delete.
     */
    where: listofscrapersWhereUniqueInput
  }

  /**
   * listofscrapers deleteMany
   */
  export type listofscrapersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which listofscrapers to delete
     */
    where?: listofscrapersWhereInput
    /**
     * Limit how many listofscrapers to delete.
     */
    limit?: number
  }

  /**
   * listofscrapers.spider_logs
   */
  export type listofscrapers$spider_logsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the spider_logs
     */
    select?: spider_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the spider_logs
     */
    omit?: spider_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: spider_logsInclude<ExtArgs> | null
    where?: spider_logsWhereInput
    orderBy?: spider_logsOrderByWithRelationInput | spider_logsOrderByWithRelationInput[]
    cursor?: spider_logsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Spider_logsScalarFieldEnum | Spider_logsScalarFieldEnum[]
  }

  /**
   * listofscrapers without action
   */
  export type listofscrapersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the listofscrapers
     */
    select?: listofscrapersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the listofscrapers
     */
    omit?: listofscrapersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: listofscrapersInclude<ExtArgs> | null
  }


  /**
   * Model product_prices
   */

  export type AggregateProduct_prices = {
    _count: Product_pricesCountAggregateOutputType | null
    _avg: Product_pricesAvgAggregateOutputType | null
    _sum: Product_pricesSumAggregateOutputType | null
    _min: Product_pricesMinAggregateOutputType | null
    _max: Product_pricesMaxAggregateOutputType | null
  }

  export type Product_pricesAvgAggregateOutputType = {
    price_id: number | null
    product_id: number | null
    price: Decimal | null
  }

  export type Product_pricesSumAggregateOutputType = {
    price_id: number | null
    product_id: number | null
    price: Decimal | null
  }

  export type Product_pricesMinAggregateOutputType = {
    price_id: number | null
    product_id: number | null
    price: Decimal | null
    retrieved_on: Date | null
  }

  export type Product_pricesMaxAggregateOutputType = {
    price_id: number | null
    product_id: number | null
    price: Decimal | null
    retrieved_on: Date | null
  }

  export type Product_pricesCountAggregateOutputType = {
    price_id: number
    product_id: number
    price: number
    retrieved_on: number
    _all: number
  }


  export type Product_pricesAvgAggregateInputType = {
    price_id?: true
    product_id?: true
    price?: true
  }

  export type Product_pricesSumAggregateInputType = {
    price_id?: true
    product_id?: true
    price?: true
  }

  export type Product_pricesMinAggregateInputType = {
    price_id?: true
    product_id?: true
    price?: true
    retrieved_on?: true
  }

  export type Product_pricesMaxAggregateInputType = {
    price_id?: true
    product_id?: true
    price?: true
    retrieved_on?: true
  }

  export type Product_pricesCountAggregateInputType = {
    price_id?: true
    product_id?: true
    price?: true
    retrieved_on?: true
    _all?: true
  }

  export type Product_pricesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which product_prices to aggregate.
     */
    where?: product_pricesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of product_prices to fetch.
     */
    orderBy?: product_pricesOrderByWithRelationInput | product_pricesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: product_pricesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` product_prices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` product_prices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned product_prices
    **/
    _count?: true | Product_pricesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Product_pricesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Product_pricesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Product_pricesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Product_pricesMaxAggregateInputType
  }

  export type GetProduct_pricesAggregateType<T extends Product_pricesAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct_prices]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct_prices[P]>
      : GetScalarType<T[P], AggregateProduct_prices[P]>
  }




  export type product_pricesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: product_pricesWhereInput
    orderBy?: product_pricesOrderByWithAggregationInput | product_pricesOrderByWithAggregationInput[]
    by: Product_pricesScalarFieldEnum[] | Product_pricesScalarFieldEnum
    having?: product_pricesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Product_pricesCountAggregateInputType | true
    _avg?: Product_pricesAvgAggregateInputType
    _sum?: Product_pricesSumAggregateInputType
    _min?: Product_pricesMinAggregateInputType
    _max?: Product_pricesMaxAggregateInputType
  }

  export type Product_pricesGroupByOutputType = {
    price_id: number
    product_id: number
    price: Decimal
    retrieved_on: Date
    _count: Product_pricesCountAggregateOutputType | null
    _avg: Product_pricesAvgAggregateOutputType | null
    _sum: Product_pricesSumAggregateOutputType | null
    _min: Product_pricesMinAggregateOutputType | null
    _max: Product_pricesMaxAggregateOutputType | null
  }

  type GetProduct_pricesGroupByPayload<T extends product_pricesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Product_pricesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Product_pricesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Product_pricesGroupByOutputType[P]>
            : GetScalarType<T[P], Product_pricesGroupByOutputType[P]>
        }
      >
    >


  export type product_pricesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    price_id?: boolean
    product_id?: boolean
    price?: boolean
    retrieved_on?: boolean
    products?: boolean | productsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product_prices"]>

  export type product_pricesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    price_id?: boolean
    product_id?: boolean
    price?: boolean
    retrieved_on?: boolean
    products?: boolean | productsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product_prices"]>

  export type product_pricesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    price_id?: boolean
    product_id?: boolean
    price?: boolean
    retrieved_on?: boolean
    products?: boolean | productsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product_prices"]>

  export type product_pricesSelectScalar = {
    price_id?: boolean
    product_id?: boolean
    price?: boolean
    retrieved_on?: boolean
  }

  export type product_pricesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"price_id" | "product_id" | "price" | "retrieved_on", ExtArgs["result"]["product_prices"]>
  export type product_pricesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | productsDefaultArgs<ExtArgs>
  }
  export type product_pricesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | productsDefaultArgs<ExtArgs>
  }
  export type product_pricesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | productsDefaultArgs<ExtArgs>
  }

  export type $product_pricesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "product_prices"
    objects: {
      products: Prisma.$productsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      price_id: number
      product_id: number
      price: Prisma.Decimal
      retrieved_on: Date
    }, ExtArgs["result"]["product_prices"]>
    composites: {}
  }

  type product_pricesGetPayload<S extends boolean | null | undefined | product_pricesDefaultArgs> = $Result.GetResult<Prisma.$product_pricesPayload, S>

  type product_pricesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<product_pricesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Product_pricesCountAggregateInputType | true
    }

  export interface product_pricesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['product_prices'], meta: { name: 'product_prices' } }
    /**
     * Find zero or one Product_prices that matches the filter.
     * @param {product_pricesFindUniqueArgs} args - Arguments to find a Product_prices
     * @example
     * // Get one Product_prices
     * const product_prices = await prisma.product_prices.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends product_pricesFindUniqueArgs>(args: SelectSubset<T, product_pricesFindUniqueArgs<ExtArgs>>): Prisma__product_pricesClient<$Result.GetResult<Prisma.$product_pricesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Product_prices that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {product_pricesFindUniqueOrThrowArgs} args - Arguments to find a Product_prices
     * @example
     * // Get one Product_prices
     * const product_prices = await prisma.product_prices.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends product_pricesFindUniqueOrThrowArgs>(args: SelectSubset<T, product_pricesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__product_pricesClient<$Result.GetResult<Prisma.$product_pricesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product_prices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {product_pricesFindFirstArgs} args - Arguments to find a Product_prices
     * @example
     * // Get one Product_prices
     * const product_prices = await prisma.product_prices.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends product_pricesFindFirstArgs>(args?: SelectSubset<T, product_pricesFindFirstArgs<ExtArgs>>): Prisma__product_pricesClient<$Result.GetResult<Prisma.$product_pricesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product_prices that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {product_pricesFindFirstOrThrowArgs} args - Arguments to find a Product_prices
     * @example
     * // Get one Product_prices
     * const product_prices = await prisma.product_prices.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends product_pricesFindFirstOrThrowArgs>(args?: SelectSubset<T, product_pricesFindFirstOrThrowArgs<ExtArgs>>): Prisma__product_pricesClient<$Result.GetResult<Prisma.$product_pricesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Product_prices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {product_pricesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Product_prices
     * const product_prices = await prisma.product_prices.findMany()
     * 
     * // Get first 10 Product_prices
     * const product_prices = await prisma.product_prices.findMany({ take: 10 })
     * 
     * // Only select the `price_id`
     * const product_pricesWithPrice_idOnly = await prisma.product_prices.findMany({ select: { price_id: true } })
     * 
     */
    findMany<T extends product_pricesFindManyArgs>(args?: SelectSubset<T, product_pricesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$product_pricesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Product_prices.
     * @param {product_pricesCreateArgs} args - Arguments to create a Product_prices.
     * @example
     * // Create one Product_prices
     * const Product_prices = await prisma.product_prices.create({
     *   data: {
     *     // ... data to create a Product_prices
     *   }
     * })
     * 
     */
    create<T extends product_pricesCreateArgs>(args: SelectSubset<T, product_pricesCreateArgs<ExtArgs>>): Prisma__product_pricesClient<$Result.GetResult<Prisma.$product_pricesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Product_prices.
     * @param {product_pricesCreateManyArgs} args - Arguments to create many Product_prices.
     * @example
     * // Create many Product_prices
     * const product_prices = await prisma.product_prices.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends product_pricesCreateManyArgs>(args?: SelectSubset<T, product_pricesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Product_prices and returns the data saved in the database.
     * @param {product_pricesCreateManyAndReturnArgs} args - Arguments to create many Product_prices.
     * @example
     * // Create many Product_prices
     * const product_prices = await prisma.product_prices.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Product_prices and only return the `price_id`
     * const product_pricesWithPrice_idOnly = await prisma.product_prices.createManyAndReturn({
     *   select: { price_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends product_pricesCreateManyAndReturnArgs>(args?: SelectSubset<T, product_pricesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$product_pricesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Product_prices.
     * @param {product_pricesDeleteArgs} args - Arguments to delete one Product_prices.
     * @example
     * // Delete one Product_prices
     * const Product_prices = await prisma.product_prices.delete({
     *   where: {
     *     // ... filter to delete one Product_prices
     *   }
     * })
     * 
     */
    delete<T extends product_pricesDeleteArgs>(args: SelectSubset<T, product_pricesDeleteArgs<ExtArgs>>): Prisma__product_pricesClient<$Result.GetResult<Prisma.$product_pricesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Product_prices.
     * @param {product_pricesUpdateArgs} args - Arguments to update one Product_prices.
     * @example
     * // Update one Product_prices
     * const product_prices = await prisma.product_prices.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends product_pricesUpdateArgs>(args: SelectSubset<T, product_pricesUpdateArgs<ExtArgs>>): Prisma__product_pricesClient<$Result.GetResult<Prisma.$product_pricesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Product_prices.
     * @param {product_pricesDeleteManyArgs} args - Arguments to filter Product_prices to delete.
     * @example
     * // Delete a few Product_prices
     * const { count } = await prisma.product_prices.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends product_pricesDeleteManyArgs>(args?: SelectSubset<T, product_pricesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Product_prices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {product_pricesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Product_prices
     * const product_prices = await prisma.product_prices.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends product_pricesUpdateManyArgs>(args: SelectSubset<T, product_pricesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Product_prices and returns the data updated in the database.
     * @param {product_pricesUpdateManyAndReturnArgs} args - Arguments to update many Product_prices.
     * @example
     * // Update many Product_prices
     * const product_prices = await prisma.product_prices.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Product_prices and only return the `price_id`
     * const product_pricesWithPrice_idOnly = await prisma.product_prices.updateManyAndReturn({
     *   select: { price_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends product_pricesUpdateManyAndReturnArgs>(args: SelectSubset<T, product_pricesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$product_pricesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Product_prices.
     * @param {product_pricesUpsertArgs} args - Arguments to update or create a Product_prices.
     * @example
     * // Update or create a Product_prices
     * const product_prices = await prisma.product_prices.upsert({
     *   create: {
     *     // ... data to create a Product_prices
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product_prices we want to update
     *   }
     * })
     */
    upsert<T extends product_pricesUpsertArgs>(args: SelectSubset<T, product_pricesUpsertArgs<ExtArgs>>): Prisma__product_pricesClient<$Result.GetResult<Prisma.$product_pricesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Product_prices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {product_pricesCountArgs} args - Arguments to filter Product_prices to count.
     * @example
     * // Count the number of Product_prices
     * const count = await prisma.product_prices.count({
     *   where: {
     *     // ... the filter for the Product_prices we want to count
     *   }
     * })
    **/
    count<T extends product_pricesCountArgs>(
      args?: Subset<T, product_pricesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Product_pricesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product_prices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Product_pricesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Product_pricesAggregateArgs>(args: Subset<T, Product_pricesAggregateArgs>): Prisma.PrismaPromise<GetProduct_pricesAggregateType<T>>

    /**
     * Group by Product_prices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {product_pricesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends product_pricesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: product_pricesGroupByArgs['orderBy'] }
        : { orderBy?: product_pricesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, product_pricesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProduct_pricesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the product_prices model
   */
  readonly fields: product_pricesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for product_prices.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__product_pricesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    products<T extends productsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, productsDefaultArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the product_prices model
   */
  interface product_pricesFieldRefs {
    readonly price_id: FieldRef<"product_prices", 'Int'>
    readonly product_id: FieldRef<"product_prices", 'Int'>
    readonly price: FieldRef<"product_prices", 'Decimal'>
    readonly retrieved_on: FieldRef<"product_prices", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * product_prices findUnique
   */
  export type product_pricesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_prices
     */
    select?: product_pricesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_prices
     */
    omit?: product_pricesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_pricesInclude<ExtArgs> | null
    /**
     * Filter, which product_prices to fetch.
     */
    where: product_pricesWhereUniqueInput
  }

  /**
   * product_prices findUniqueOrThrow
   */
  export type product_pricesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_prices
     */
    select?: product_pricesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_prices
     */
    omit?: product_pricesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_pricesInclude<ExtArgs> | null
    /**
     * Filter, which product_prices to fetch.
     */
    where: product_pricesWhereUniqueInput
  }

  /**
   * product_prices findFirst
   */
  export type product_pricesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_prices
     */
    select?: product_pricesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_prices
     */
    omit?: product_pricesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_pricesInclude<ExtArgs> | null
    /**
     * Filter, which product_prices to fetch.
     */
    where?: product_pricesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of product_prices to fetch.
     */
    orderBy?: product_pricesOrderByWithRelationInput | product_pricesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for product_prices.
     */
    cursor?: product_pricesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` product_prices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` product_prices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of product_prices.
     */
    distinct?: Product_pricesScalarFieldEnum | Product_pricesScalarFieldEnum[]
  }

  /**
   * product_prices findFirstOrThrow
   */
  export type product_pricesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_prices
     */
    select?: product_pricesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_prices
     */
    omit?: product_pricesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_pricesInclude<ExtArgs> | null
    /**
     * Filter, which product_prices to fetch.
     */
    where?: product_pricesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of product_prices to fetch.
     */
    orderBy?: product_pricesOrderByWithRelationInput | product_pricesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for product_prices.
     */
    cursor?: product_pricesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` product_prices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` product_prices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of product_prices.
     */
    distinct?: Product_pricesScalarFieldEnum | Product_pricesScalarFieldEnum[]
  }

  /**
   * product_prices findMany
   */
  export type product_pricesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_prices
     */
    select?: product_pricesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_prices
     */
    omit?: product_pricesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_pricesInclude<ExtArgs> | null
    /**
     * Filter, which product_prices to fetch.
     */
    where?: product_pricesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of product_prices to fetch.
     */
    orderBy?: product_pricesOrderByWithRelationInput | product_pricesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing product_prices.
     */
    cursor?: product_pricesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` product_prices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` product_prices.
     */
    skip?: number
    distinct?: Product_pricesScalarFieldEnum | Product_pricesScalarFieldEnum[]
  }

  /**
   * product_prices create
   */
  export type product_pricesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_prices
     */
    select?: product_pricesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_prices
     */
    omit?: product_pricesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_pricesInclude<ExtArgs> | null
    /**
     * The data needed to create a product_prices.
     */
    data: XOR<product_pricesCreateInput, product_pricesUncheckedCreateInput>
  }

  /**
   * product_prices createMany
   */
  export type product_pricesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many product_prices.
     */
    data: product_pricesCreateManyInput | product_pricesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * product_prices createManyAndReturn
   */
  export type product_pricesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_prices
     */
    select?: product_pricesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the product_prices
     */
    omit?: product_pricesOmit<ExtArgs> | null
    /**
     * The data used to create many product_prices.
     */
    data: product_pricesCreateManyInput | product_pricesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_pricesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * product_prices update
   */
  export type product_pricesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_prices
     */
    select?: product_pricesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_prices
     */
    omit?: product_pricesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_pricesInclude<ExtArgs> | null
    /**
     * The data needed to update a product_prices.
     */
    data: XOR<product_pricesUpdateInput, product_pricesUncheckedUpdateInput>
    /**
     * Choose, which product_prices to update.
     */
    where: product_pricesWhereUniqueInput
  }

  /**
   * product_prices updateMany
   */
  export type product_pricesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update product_prices.
     */
    data: XOR<product_pricesUpdateManyMutationInput, product_pricesUncheckedUpdateManyInput>
    /**
     * Filter which product_prices to update
     */
    where?: product_pricesWhereInput
    /**
     * Limit how many product_prices to update.
     */
    limit?: number
  }

  /**
   * product_prices updateManyAndReturn
   */
  export type product_pricesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_prices
     */
    select?: product_pricesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the product_prices
     */
    omit?: product_pricesOmit<ExtArgs> | null
    /**
     * The data used to update product_prices.
     */
    data: XOR<product_pricesUpdateManyMutationInput, product_pricesUncheckedUpdateManyInput>
    /**
     * Filter which product_prices to update
     */
    where?: product_pricesWhereInput
    /**
     * Limit how many product_prices to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_pricesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * product_prices upsert
   */
  export type product_pricesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_prices
     */
    select?: product_pricesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_prices
     */
    omit?: product_pricesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_pricesInclude<ExtArgs> | null
    /**
     * The filter to search for the product_prices to update in case it exists.
     */
    where: product_pricesWhereUniqueInput
    /**
     * In case the product_prices found by the `where` argument doesn't exist, create a new product_prices with this data.
     */
    create: XOR<product_pricesCreateInput, product_pricesUncheckedCreateInput>
    /**
     * In case the product_prices was found with the provided `where` argument, update it with this data.
     */
    update: XOR<product_pricesUpdateInput, product_pricesUncheckedUpdateInput>
  }

  /**
   * product_prices delete
   */
  export type product_pricesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_prices
     */
    select?: product_pricesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_prices
     */
    omit?: product_pricesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_pricesInclude<ExtArgs> | null
    /**
     * Filter which product_prices to delete.
     */
    where: product_pricesWhereUniqueInput
  }

  /**
   * product_prices deleteMany
   */
  export type product_pricesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which product_prices to delete
     */
    where?: product_pricesWhereInput
    /**
     * Limit how many product_prices to delete.
     */
    limit?: number
  }

  /**
   * product_prices without action
   */
  export type product_pricesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_prices
     */
    select?: product_pricesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_prices
     */
    omit?: product_pricesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_pricesInclude<ExtArgs> | null
  }


  /**
   * Model products
   */

  export type AggregateProducts = {
    _count: ProductsCountAggregateOutputType | null
    _avg: ProductsAvgAggregateOutputType | null
    _sum: ProductsSumAggregateOutputType | null
    _min: ProductsMinAggregateOutputType | null
    _max: ProductsMaxAggregateOutputType | null
  }

  export type ProductsAvgAggregateOutputType = {
    product_id: number | null
    store_id: number | null
    latest_price: number | null
  }

  export type ProductsSumAggregateOutputType = {
    product_id: number | null
    store_id: number | null
    latest_price: number | null
  }

  export type ProductsMinAggregateOutputType = {
    product_id: number | null
    store_id: number | null
    product_name: string | null
    product_url: string | null
    is_active: boolean | null
    created_at: Date | null
    latest_price: number | null
    categories: string | null
  }

  export type ProductsMaxAggregateOutputType = {
    product_id: number | null
    store_id: number | null
    product_name: string | null
    product_url: string | null
    is_active: boolean | null
    created_at: Date | null
    latest_price: number | null
    categories: string | null
  }

  export type ProductsCountAggregateOutputType = {
    product_id: number
    store_id: number
    product_name: number
    product_url: number
    is_active: number
    created_at: number
    image_urls: number
    latest_price: number
    categories: number
    _all: number
  }


  export type ProductsAvgAggregateInputType = {
    product_id?: true
    store_id?: true
    latest_price?: true
  }

  export type ProductsSumAggregateInputType = {
    product_id?: true
    store_id?: true
    latest_price?: true
  }

  export type ProductsMinAggregateInputType = {
    product_id?: true
    store_id?: true
    product_name?: true
    product_url?: true
    is_active?: true
    created_at?: true
    latest_price?: true
    categories?: true
  }

  export type ProductsMaxAggregateInputType = {
    product_id?: true
    store_id?: true
    product_name?: true
    product_url?: true
    is_active?: true
    created_at?: true
    latest_price?: true
    categories?: true
  }

  export type ProductsCountAggregateInputType = {
    product_id?: true
    store_id?: true
    product_name?: true
    product_url?: true
    is_active?: true
    created_at?: true
    image_urls?: true
    latest_price?: true
    categories?: true
    _all?: true
  }

  export type ProductsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which products to aggregate.
     */
    where?: productsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: productsOrderByWithRelationInput | productsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: productsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned products
    **/
    _count?: true | ProductsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductsMaxAggregateInputType
  }

  export type GetProductsAggregateType<T extends ProductsAggregateArgs> = {
        [P in keyof T & keyof AggregateProducts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProducts[P]>
      : GetScalarType<T[P], AggregateProducts[P]>
  }




  export type productsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: productsWhereInput
    orderBy?: productsOrderByWithAggregationInput | productsOrderByWithAggregationInput[]
    by: ProductsScalarFieldEnum[] | ProductsScalarFieldEnum
    having?: productsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductsCountAggregateInputType | true
    _avg?: ProductsAvgAggregateInputType
    _sum?: ProductsSumAggregateInputType
    _min?: ProductsMinAggregateInputType
    _max?: ProductsMaxAggregateInputType
  }

  export type ProductsGroupByOutputType = {
    product_id: number
    store_id: number
    product_name: string
    product_url: string
    is_active: boolean | null
    created_at: Date | null
    image_urls: string[]
    latest_price: number | null
    categories: string | null
    _count: ProductsCountAggregateOutputType | null
    _avg: ProductsAvgAggregateOutputType | null
    _sum: ProductsSumAggregateOutputType | null
    _min: ProductsMinAggregateOutputType | null
    _max: ProductsMaxAggregateOutputType | null
  }

  type GetProductsGroupByPayload<T extends productsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductsGroupByOutputType[P]>
            : GetScalarType<T[P], ProductsGroupByOutputType[P]>
        }
      >
    >


  export type productsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    product_id?: boolean
    store_id?: boolean
    product_name?: boolean
    product_url?: boolean
    is_active?: boolean
    created_at?: boolean
    image_urls?: boolean
    latest_price?: boolean
    categories?: boolean
    product_prices?: boolean | products$product_pricesArgs<ExtArgs>
    stores?: boolean | storesDefaultArgs<ExtArgs>
    _count?: boolean | ProductsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["products"]>

  export type productsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    product_id?: boolean
    store_id?: boolean
    product_name?: boolean
    product_url?: boolean
    is_active?: boolean
    created_at?: boolean
    image_urls?: boolean
    latest_price?: boolean
    categories?: boolean
    stores?: boolean | storesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["products"]>

  export type productsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    product_id?: boolean
    store_id?: boolean
    product_name?: boolean
    product_url?: boolean
    is_active?: boolean
    created_at?: boolean
    image_urls?: boolean
    latest_price?: boolean
    categories?: boolean
    stores?: boolean | storesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["products"]>

  export type productsSelectScalar = {
    product_id?: boolean
    store_id?: boolean
    product_name?: boolean
    product_url?: boolean
    is_active?: boolean
    created_at?: boolean
    image_urls?: boolean
    latest_price?: boolean
    categories?: boolean
  }

  export type productsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"product_id" | "store_id" | "product_name" | "product_url" | "is_active" | "created_at" | "image_urls" | "latest_price" | "categories", ExtArgs["result"]["products"]>
  export type productsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product_prices?: boolean | products$product_pricesArgs<ExtArgs>
    stores?: boolean | storesDefaultArgs<ExtArgs>
    _count?: boolean | ProductsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type productsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    stores?: boolean | storesDefaultArgs<ExtArgs>
  }
  export type productsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    stores?: boolean | storesDefaultArgs<ExtArgs>
  }

  export type $productsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "products"
    objects: {
      product_prices: Prisma.$product_pricesPayload<ExtArgs>[]
      stores: Prisma.$storesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      product_id: number
      store_id: number
      product_name: string
      product_url: string
      is_active: boolean | null
      created_at: Date | null
      image_urls: string[]
      latest_price: number | null
      categories: string | null
    }, ExtArgs["result"]["products"]>
    composites: {}
  }

  type productsGetPayload<S extends boolean | null | undefined | productsDefaultArgs> = $Result.GetResult<Prisma.$productsPayload, S>

  type productsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<productsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductsCountAggregateInputType | true
    }

  export interface productsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['products'], meta: { name: 'products' } }
    /**
     * Find zero or one Products that matches the filter.
     * @param {productsFindUniqueArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends productsFindUniqueArgs>(args: SelectSubset<T, productsFindUniqueArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Products that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {productsFindUniqueOrThrowArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends productsFindUniqueOrThrowArgs>(args: SelectSubset<T, productsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsFindFirstArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends productsFindFirstArgs>(args?: SelectSubset<T, productsFindFirstArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Products that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsFindFirstOrThrowArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends productsFindFirstOrThrowArgs>(args?: SelectSubset<T, productsFindFirstOrThrowArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.products.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.products.findMany({ take: 10 })
     * 
     * // Only select the `product_id`
     * const productsWithProduct_idOnly = await prisma.products.findMany({ select: { product_id: true } })
     * 
     */
    findMany<T extends productsFindManyArgs>(args?: SelectSubset<T, productsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Products.
     * @param {productsCreateArgs} args - Arguments to create a Products.
     * @example
     * // Create one Products
     * const Products = await prisma.products.create({
     *   data: {
     *     // ... data to create a Products
     *   }
     * })
     * 
     */
    create<T extends productsCreateArgs>(args: SelectSubset<T, productsCreateArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Products.
     * @param {productsCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const products = await prisma.products.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends productsCreateManyArgs>(args?: SelectSubset<T, productsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Products and returns the data saved in the database.
     * @param {productsCreateManyAndReturnArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const products = await prisma.products.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Products and only return the `product_id`
     * const productsWithProduct_idOnly = await prisma.products.createManyAndReturn({
     *   select: { product_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends productsCreateManyAndReturnArgs>(args?: SelectSubset<T, productsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Products.
     * @param {productsDeleteArgs} args - Arguments to delete one Products.
     * @example
     * // Delete one Products
     * const Products = await prisma.products.delete({
     *   where: {
     *     // ... filter to delete one Products
     *   }
     * })
     * 
     */
    delete<T extends productsDeleteArgs>(args: SelectSubset<T, productsDeleteArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Products.
     * @param {productsUpdateArgs} args - Arguments to update one Products.
     * @example
     * // Update one Products
     * const products = await prisma.products.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends productsUpdateArgs>(args: SelectSubset<T, productsUpdateArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Products.
     * @param {productsDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.products.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends productsDeleteManyArgs>(args?: SelectSubset<T, productsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const products = await prisma.products.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends productsUpdateManyArgs>(args: SelectSubset<T, productsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products and returns the data updated in the database.
     * @param {productsUpdateManyAndReturnArgs} args - Arguments to update many Products.
     * @example
     * // Update many Products
     * const products = await prisma.products.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Products and only return the `product_id`
     * const productsWithProduct_idOnly = await prisma.products.updateManyAndReturn({
     *   select: { product_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends productsUpdateManyAndReturnArgs>(args: SelectSubset<T, productsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Products.
     * @param {productsUpsertArgs} args - Arguments to update or create a Products.
     * @example
     * // Update or create a Products
     * const products = await prisma.products.upsert({
     *   create: {
     *     // ... data to create a Products
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Products we want to update
     *   }
     * })
     */
    upsert<T extends productsUpsertArgs>(args: SelectSubset<T, productsUpsertArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.products.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends productsCountArgs>(
      args?: Subset<T, productsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductsAggregateArgs>(args: Subset<T, ProductsAggregateArgs>): Prisma.PrismaPromise<GetProductsAggregateType<T>>

    /**
     * Group by Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends productsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: productsGroupByArgs['orderBy'] }
        : { orderBy?: productsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, productsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the products model
   */
  readonly fields: productsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for products.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__productsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product_prices<T extends products$product_pricesArgs<ExtArgs> = {}>(args?: Subset<T, products$product_pricesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$product_pricesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    stores<T extends storesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, storesDefaultArgs<ExtArgs>>): Prisma__storesClient<$Result.GetResult<Prisma.$storesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the products model
   */
  interface productsFieldRefs {
    readonly product_id: FieldRef<"products", 'Int'>
    readonly store_id: FieldRef<"products", 'Int'>
    readonly product_name: FieldRef<"products", 'String'>
    readonly product_url: FieldRef<"products", 'String'>
    readonly is_active: FieldRef<"products", 'Boolean'>
    readonly created_at: FieldRef<"products", 'DateTime'>
    readonly image_urls: FieldRef<"products", 'String[]'>
    readonly latest_price: FieldRef<"products", 'Int'>
    readonly categories: FieldRef<"products", 'String'>
  }
    

  // Custom InputTypes
  /**
   * products findUnique
   */
  export type productsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * Filter, which products to fetch.
     */
    where: productsWhereUniqueInput
  }

  /**
   * products findUniqueOrThrow
   */
  export type productsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * Filter, which products to fetch.
     */
    where: productsWhereUniqueInput
  }

  /**
   * products findFirst
   */
  export type productsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * Filter, which products to fetch.
     */
    where?: productsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: productsOrderByWithRelationInput | productsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for products.
     */
    cursor?: productsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of products.
     */
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * products findFirstOrThrow
   */
  export type productsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * Filter, which products to fetch.
     */
    where?: productsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: productsOrderByWithRelationInput | productsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for products.
     */
    cursor?: productsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of products.
     */
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * products findMany
   */
  export type productsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * Filter, which products to fetch.
     */
    where?: productsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: productsOrderByWithRelationInput | productsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing products.
     */
    cursor?: productsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     */
    skip?: number
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * products create
   */
  export type productsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * The data needed to create a products.
     */
    data: XOR<productsCreateInput, productsUncheckedCreateInput>
  }

  /**
   * products createMany
   */
  export type productsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many products.
     */
    data: productsCreateManyInput | productsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * products createManyAndReturn
   */
  export type productsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * The data used to create many products.
     */
    data: productsCreateManyInput | productsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * products update
   */
  export type productsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * The data needed to update a products.
     */
    data: XOR<productsUpdateInput, productsUncheckedUpdateInput>
    /**
     * Choose, which products to update.
     */
    where: productsWhereUniqueInput
  }

  /**
   * products updateMany
   */
  export type productsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update products.
     */
    data: XOR<productsUpdateManyMutationInput, productsUncheckedUpdateManyInput>
    /**
     * Filter which products to update
     */
    where?: productsWhereInput
    /**
     * Limit how many products to update.
     */
    limit?: number
  }

  /**
   * products updateManyAndReturn
   */
  export type productsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * The data used to update products.
     */
    data: XOR<productsUpdateManyMutationInput, productsUncheckedUpdateManyInput>
    /**
     * Filter which products to update
     */
    where?: productsWhereInput
    /**
     * Limit how many products to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * products upsert
   */
  export type productsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * The filter to search for the products to update in case it exists.
     */
    where: productsWhereUniqueInput
    /**
     * In case the products found by the `where` argument doesn't exist, create a new products with this data.
     */
    create: XOR<productsCreateInput, productsUncheckedCreateInput>
    /**
     * In case the products was found with the provided `where` argument, update it with this data.
     */
    update: XOR<productsUpdateInput, productsUncheckedUpdateInput>
  }

  /**
   * products delete
   */
  export type productsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * Filter which products to delete.
     */
    where: productsWhereUniqueInput
  }

  /**
   * products deleteMany
   */
  export type productsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which products to delete
     */
    where?: productsWhereInput
    /**
     * Limit how many products to delete.
     */
    limit?: number
  }

  /**
   * products.product_prices
   */
  export type products$product_pricesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_prices
     */
    select?: product_pricesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_prices
     */
    omit?: product_pricesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_pricesInclude<ExtArgs> | null
    where?: product_pricesWhereInput
    orderBy?: product_pricesOrderByWithRelationInput | product_pricesOrderByWithRelationInput[]
    cursor?: product_pricesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Product_pricesScalarFieldEnum | Product_pricesScalarFieldEnum[]
  }

  /**
   * products without action
   */
  export type productsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
  }


  /**
   * Model shahzar_table
   */

  export type AggregateShahzar_table = {
    _count: Shahzar_tableCountAggregateOutputType | null
    _avg: Shahzar_tableAvgAggregateOutputType | null
    _sum: Shahzar_tableSumAggregateOutputType | null
    _min: Shahzar_tableMinAggregateOutputType | null
    _max: Shahzar_tableMaxAggregateOutputType | null
  }

  export type Shahzar_tableAvgAggregateOutputType = {
    id: number | null
    price: Decimal | null
  }

  export type Shahzar_tableSumAggregateOutputType = {
    id: number | null
    price: Decimal | null
  }

  export type Shahzar_tableMinAggregateOutputType = {
    id: number | null
    name: string | null
    price: Decimal | null
    image: string | null
    url: string | null
    store: string | null
  }

  export type Shahzar_tableMaxAggregateOutputType = {
    id: number | null
    name: string | null
    price: Decimal | null
    image: string | null
    url: string | null
    store: string | null
  }

  export type Shahzar_tableCountAggregateOutputType = {
    id: number
    name: number
    price: number
    image: number
    url: number
    store: number
    _all: number
  }


  export type Shahzar_tableAvgAggregateInputType = {
    id?: true
    price?: true
  }

  export type Shahzar_tableSumAggregateInputType = {
    id?: true
    price?: true
  }

  export type Shahzar_tableMinAggregateInputType = {
    id?: true
    name?: true
    price?: true
    image?: true
    url?: true
    store?: true
  }

  export type Shahzar_tableMaxAggregateInputType = {
    id?: true
    name?: true
    price?: true
    image?: true
    url?: true
    store?: true
  }

  export type Shahzar_tableCountAggregateInputType = {
    id?: true
    name?: true
    price?: true
    image?: true
    url?: true
    store?: true
    _all?: true
  }

  export type Shahzar_tableAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which shahzar_table to aggregate.
     */
    where?: shahzar_tableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of shahzar_tables to fetch.
     */
    orderBy?: shahzar_tableOrderByWithRelationInput | shahzar_tableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: shahzar_tableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` shahzar_tables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` shahzar_tables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned shahzar_tables
    **/
    _count?: true | Shahzar_tableCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Shahzar_tableAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Shahzar_tableSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Shahzar_tableMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Shahzar_tableMaxAggregateInputType
  }

  export type GetShahzar_tableAggregateType<T extends Shahzar_tableAggregateArgs> = {
        [P in keyof T & keyof AggregateShahzar_table]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShahzar_table[P]>
      : GetScalarType<T[P], AggregateShahzar_table[P]>
  }




  export type shahzar_tableGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: shahzar_tableWhereInput
    orderBy?: shahzar_tableOrderByWithAggregationInput | shahzar_tableOrderByWithAggregationInput[]
    by: Shahzar_tableScalarFieldEnum[] | Shahzar_tableScalarFieldEnum
    having?: shahzar_tableScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Shahzar_tableCountAggregateInputType | true
    _avg?: Shahzar_tableAvgAggregateInputType
    _sum?: Shahzar_tableSumAggregateInputType
    _min?: Shahzar_tableMinAggregateInputType
    _max?: Shahzar_tableMaxAggregateInputType
  }

  export type Shahzar_tableGroupByOutputType = {
    id: number
    name: string
    price: Decimal
    image: string
    url: string
    store: string
    _count: Shahzar_tableCountAggregateOutputType | null
    _avg: Shahzar_tableAvgAggregateOutputType | null
    _sum: Shahzar_tableSumAggregateOutputType | null
    _min: Shahzar_tableMinAggregateOutputType | null
    _max: Shahzar_tableMaxAggregateOutputType | null
  }

  type GetShahzar_tableGroupByPayload<T extends shahzar_tableGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Shahzar_tableGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Shahzar_tableGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Shahzar_tableGroupByOutputType[P]>
            : GetScalarType<T[P], Shahzar_tableGroupByOutputType[P]>
        }
      >
    >


  export type shahzar_tableSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    price?: boolean
    image?: boolean
    url?: boolean
    store?: boolean
  }, ExtArgs["result"]["shahzar_table"]>

  export type shahzar_tableSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    price?: boolean
    image?: boolean
    url?: boolean
    store?: boolean
  }, ExtArgs["result"]["shahzar_table"]>

  export type shahzar_tableSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    price?: boolean
    image?: boolean
    url?: boolean
    store?: boolean
  }, ExtArgs["result"]["shahzar_table"]>

  export type shahzar_tableSelectScalar = {
    id?: boolean
    name?: boolean
    price?: boolean
    image?: boolean
    url?: boolean
    store?: boolean
  }

  export type shahzar_tableOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "price" | "image" | "url" | "store", ExtArgs["result"]["shahzar_table"]>

  export type $shahzar_tablePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "shahzar_table"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      price: Prisma.Decimal
      image: string
      url: string
      store: string
    }, ExtArgs["result"]["shahzar_table"]>
    composites: {}
  }

  type shahzar_tableGetPayload<S extends boolean | null | undefined | shahzar_tableDefaultArgs> = $Result.GetResult<Prisma.$shahzar_tablePayload, S>

  type shahzar_tableCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<shahzar_tableFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Shahzar_tableCountAggregateInputType | true
    }

  export interface shahzar_tableDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['shahzar_table'], meta: { name: 'shahzar_table' } }
    /**
     * Find zero or one Shahzar_table that matches the filter.
     * @param {shahzar_tableFindUniqueArgs} args - Arguments to find a Shahzar_table
     * @example
     * // Get one Shahzar_table
     * const shahzar_table = await prisma.shahzar_table.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends shahzar_tableFindUniqueArgs>(args: SelectSubset<T, shahzar_tableFindUniqueArgs<ExtArgs>>): Prisma__shahzar_tableClient<$Result.GetResult<Prisma.$shahzar_tablePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Shahzar_table that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {shahzar_tableFindUniqueOrThrowArgs} args - Arguments to find a Shahzar_table
     * @example
     * // Get one Shahzar_table
     * const shahzar_table = await prisma.shahzar_table.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends shahzar_tableFindUniqueOrThrowArgs>(args: SelectSubset<T, shahzar_tableFindUniqueOrThrowArgs<ExtArgs>>): Prisma__shahzar_tableClient<$Result.GetResult<Prisma.$shahzar_tablePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Shahzar_table that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {shahzar_tableFindFirstArgs} args - Arguments to find a Shahzar_table
     * @example
     * // Get one Shahzar_table
     * const shahzar_table = await prisma.shahzar_table.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends shahzar_tableFindFirstArgs>(args?: SelectSubset<T, shahzar_tableFindFirstArgs<ExtArgs>>): Prisma__shahzar_tableClient<$Result.GetResult<Prisma.$shahzar_tablePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Shahzar_table that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {shahzar_tableFindFirstOrThrowArgs} args - Arguments to find a Shahzar_table
     * @example
     * // Get one Shahzar_table
     * const shahzar_table = await prisma.shahzar_table.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends shahzar_tableFindFirstOrThrowArgs>(args?: SelectSubset<T, shahzar_tableFindFirstOrThrowArgs<ExtArgs>>): Prisma__shahzar_tableClient<$Result.GetResult<Prisma.$shahzar_tablePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Shahzar_tables that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {shahzar_tableFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Shahzar_tables
     * const shahzar_tables = await prisma.shahzar_table.findMany()
     * 
     * // Get first 10 Shahzar_tables
     * const shahzar_tables = await prisma.shahzar_table.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const shahzar_tableWithIdOnly = await prisma.shahzar_table.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends shahzar_tableFindManyArgs>(args?: SelectSubset<T, shahzar_tableFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$shahzar_tablePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Shahzar_table.
     * @param {shahzar_tableCreateArgs} args - Arguments to create a Shahzar_table.
     * @example
     * // Create one Shahzar_table
     * const Shahzar_table = await prisma.shahzar_table.create({
     *   data: {
     *     // ... data to create a Shahzar_table
     *   }
     * })
     * 
     */
    create<T extends shahzar_tableCreateArgs>(args: SelectSubset<T, shahzar_tableCreateArgs<ExtArgs>>): Prisma__shahzar_tableClient<$Result.GetResult<Prisma.$shahzar_tablePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Shahzar_tables.
     * @param {shahzar_tableCreateManyArgs} args - Arguments to create many Shahzar_tables.
     * @example
     * // Create many Shahzar_tables
     * const shahzar_table = await prisma.shahzar_table.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends shahzar_tableCreateManyArgs>(args?: SelectSubset<T, shahzar_tableCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Shahzar_tables and returns the data saved in the database.
     * @param {shahzar_tableCreateManyAndReturnArgs} args - Arguments to create many Shahzar_tables.
     * @example
     * // Create many Shahzar_tables
     * const shahzar_table = await prisma.shahzar_table.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Shahzar_tables and only return the `id`
     * const shahzar_tableWithIdOnly = await prisma.shahzar_table.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends shahzar_tableCreateManyAndReturnArgs>(args?: SelectSubset<T, shahzar_tableCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$shahzar_tablePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Shahzar_table.
     * @param {shahzar_tableDeleteArgs} args - Arguments to delete one Shahzar_table.
     * @example
     * // Delete one Shahzar_table
     * const Shahzar_table = await prisma.shahzar_table.delete({
     *   where: {
     *     // ... filter to delete one Shahzar_table
     *   }
     * })
     * 
     */
    delete<T extends shahzar_tableDeleteArgs>(args: SelectSubset<T, shahzar_tableDeleteArgs<ExtArgs>>): Prisma__shahzar_tableClient<$Result.GetResult<Prisma.$shahzar_tablePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Shahzar_table.
     * @param {shahzar_tableUpdateArgs} args - Arguments to update one Shahzar_table.
     * @example
     * // Update one Shahzar_table
     * const shahzar_table = await prisma.shahzar_table.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends shahzar_tableUpdateArgs>(args: SelectSubset<T, shahzar_tableUpdateArgs<ExtArgs>>): Prisma__shahzar_tableClient<$Result.GetResult<Prisma.$shahzar_tablePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Shahzar_tables.
     * @param {shahzar_tableDeleteManyArgs} args - Arguments to filter Shahzar_tables to delete.
     * @example
     * // Delete a few Shahzar_tables
     * const { count } = await prisma.shahzar_table.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends shahzar_tableDeleteManyArgs>(args?: SelectSubset<T, shahzar_tableDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Shahzar_tables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {shahzar_tableUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Shahzar_tables
     * const shahzar_table = await prisma.shahzar_table.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends shahzar_tableUpdateManyArgs>(args: SelectSubset<T, shahzar_tableUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Shahzar_tables and returns the data updated in the database.
     * @param {shahzar_tableUpdateManyAndReturnArgs} args - Arguments to update many Shahzar_tables.
     * @example
     * // Update many Shahzar_tables
     * const shahzar_table = await prisma.shahzar_table.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Shahzar_tables and only return the `id`
     * const shahzar_tableWithIdOnly = await prisma.shahzar_table.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends shahzar_tableUpdateManyAndReturnArgs>(args: SelectSubset<T, shahzar_tableUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$shahzar_tablePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Shahzar_table.
     * @param {shahzar_tableUpsertArgs} args - Arguments to update or create a Shahzar_table.
     * @example
     * // Update or create a Shahzar_table
     * const shahzar_table = await prisma.shahzar_table.upsert({
     *   create: {
     *     // ... data to create a Shahzar_table
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Shahzar_table we want to update
     *   }
     * })
     */
    upsert<T extends shahzar_tableUpsertArgs>(args: SelectSubset<T, shahzar_tableUpsertArgs<ExtArgs>>): Prisma__shahzar_tableClient<$Result.GetResult<Prisma.$shahzar_tablePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Shahzar_tables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {shahzar_tableCountArgs} args - Arguments to filter Shahzar_tables to count.
     * @example
     * // Count the number of Shahzar_tables
     * const count = await prisma.shahzar_table.count({
     *   where: {
     *     // ... the filter for the Shahzar_tables we want to count
     *   }
     * })
    **/
    count<T extends shahzar_tableCountArgs>(
      args?: Subset<T, shahzar_tableCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Shahzar_tableCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Shahzar_table.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Shahzar_tableAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Shahzar_tableAggregateArgs>(args: Subset<T, Shahzar_tableAggregateArgs>): Prisma.PrismaPromise<GetShahzar_tableAggregateType<T>>

    /**
     * Group by Shahzar_table.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {shahzar_tableGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends shahzar_tableGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: shahzar_tableGroupByArgs['orderBy'] }
        : { orderBy?: shahzar_tableGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, shahzar_tableGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShahzar_tableGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the shahzar_table model
   */
  readonly fields: shahzar_tableFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for shahzar_table.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__shahzar_tableClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the shahzar_table model
   */
  interface shahzar_tableFieldRefs {
    readonly id: FieldRef<"shahzar_table", 'Int'>
    readonly name: FieldRef<"shahzar_table", 'String'>
    readonly price: FieldRef<"shahzar_table", 'Decimal'>
    readonly image: FieldRef<"shahzar_table", 'String'>
    readonly url: FieldRef<"shahzar_table", 'String'>
    readonly store: FieldRef<"shahzar_table", 'String'>
  }
    

  // Custom InputTypes
  /**
   * shahzar_table findUnique
   */
  export type shahzar_tableFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the shahzar_table
     */
    select?: shahzar_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the shahzar_table
     */
    omit?: shahzar_tableOmit<ExtArgs> | null
    /**
     * Filter, which shahzar_table to fetch.
     */
    where: shahzar_tableWhereUniqueInput
  }

  /**
   * shahzar_table findUniqueOrThrow
   */
  export type shahzar_tableFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the shahzar_table
     */
    select?: shahzar_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the shahzar_table
     */
    omit?: shahzar_tableOmit<ExtArgs> | null
    /**
     * Filter, which shahzar_table to fetch.
     */
    where: shahzar_tableWhereUniqueInput
  }

  /**
   * shahzar_table findFirst
   */
  export type shahzar_tableFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the shahzar_table
     */
    select?: shahzar_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the shahzar_table
     */
    omit?: shahzar_tableOmit<ExtArgs> | null
    /**
     * Filter, which shahzar_table to fetch.
     */
    where?: shahzar_tableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of shahzar_tables to fetch.
     */
    orderBy?: shahzar_tableOrderByWithRelationInput | shahzar_tableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for shahzar_tables.
     */
    cursor?: shahzar_tableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` shahzar_tables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` shahzar_tables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of shahzar_tables.
     */
    distinct?: Shahzar_tableScalarFieldEnum | Shahzar_tableScalarFieldEnum[]
  }

  /**
   * shahzar_table findFirstOrThrow
   */
  export type shahzar_tableFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the shahzar_table
     */
    select?: shahzar_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the shahzar_table
     */
    omit?: shahzar_tableOmit<ExtArgs> | null
    /**
     * Filter, which shahzar_table to fetch.
     */
    where?: shahzar_tableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of shahzar_tables to fetch.
     */
    orderBy?: shahzar_tableOrderByWithRelationInput | shahzar_tableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for shahzar_tables.
     */
    cursor?: shahzar_tableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` shahzar_tables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` shahzar_tables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of shahzar_tables.
     */
    distinct?: Shahzar_tableScalarFieldEnum | Shahzar_tableScalarFieldEnum[]
  }

  /**
   * shahzar_table findMany
   */
  export type shahzar_tableFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the shahzar_table
     */
    select?: shahzar_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the shahzar_table
     */
    omit?: shahzar_tableOmit<ExtArgs> | null
    /**
     * Filter, which shahzar_tables to fetch.
     */
    where?: shahzar_tableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of shahzar_tables to fetch.
     */
    orderBy?: shahzar_tableOrderByWithRelationInput | shahzar_tableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing shahzar_tables.
     */
    cursor?: shahzar_tableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` shahzar_tables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` shahzar_tables.
     */
    skip?: number
    distinct?: Shahzar_tableScalarFieldEnum | Shahzar_tableScalarFieldEnum[]
  }

  /**
   * shahzar_table create
   */
  export type shahzar_tableCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the shahzar_table
     */
    select?: shahzar_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the shahzar_table
     */
    omit?: shahzar_tableOmit<ExtArgs> | null
    /**
     * The data needed to create a shahzar_table.
     */
    data: XOR<shahzar_tableCreateInput, shahzar_tableUncheckedCreateInput>
  }

  /**
   * shahzar_table createMany
   */
  export type shahzar_tableCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many shahzar_tables.
     */
    data: shahzar_tableCreateManyInput | shahzar_tableCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * shahzar_table createManyAndReturn
   */
  export type shahzar_tableCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the shahzar_table
     */
    select?: shahzar_tableSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the shahzar_table
     */
    omit?: shahzar_tableOmit<ExtArgs> | null
    /**
     * The data used to create many shahzar_tables.
     */
    data: shahzar_tableCreateManyInput | shahzar_tableCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * shahzar_table update
   */
  export type shahzar_tableUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the shahzar_table
     */
    select?: shahzar_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the shahzar_table
     */
    omit?: shahzar_tableOmit<ExtArgs> | null
    /**
     * The data needed to update a shahzar_table.
     */
    data: XOR<shahzar_tableUpdateInput, shahzar_tableUncheckedUpdateInput>
    /**
     * Choose, which shahzar_table to update.
     */
    where: shahzar_tableWhereUniqueInput
  }

  /**
   * shahzar_table updateMany
   */
  export type shahzar_tableUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update shahzar_tables.
     */
    data: XOR<shahzar_tableUpdateManyMutationInput, shahzar_tableUncheckedUpdateManyInput>
    /**
     * Filter which shahzar_tables to update
     */
    where?: shahzar_tableWhereInput
    /**
     * Limit how many shahzar_tables to update.
     */
    limit?: number
  }

  /**
   * shahzar_table updateManyAndReturn
   */
  export type shahzar_tableUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the shahzar_table
     */
    select?: shahzar_tableSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the shahzar_table
     */
    omit?: shahzar_tableOmit<ExtArgs> | null
    /**
     * The data used to update shahzar_tables.
     */
    data: XOR<shahzar_tableUpdateManyMutationInput, shahzar_tableUncheckedUpdateManyInput>
    /**
     * Filter which shahzar_tables to update
     */
    where?: shahzar_tableWhereInput
    /**
     * Limit how many shahzar_tables to update.
     */
    limit?: number
  }

  /**
   * shahzar_table upsert
   */
  export type shahzar_tableUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the shahzar_table
     */
    select?: shahzar_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the shahzar_table
     */
    omit?: shahzar_tableOmit<ExtArgs> | null
    /**
     * The filter to search for the shahzar_table to update in case it exists.
     */
    where: shahzar_tableWhereUniqueInput
    /**
     * In case the shahzar_table found by the `where` argument doesn't exist, create a new shahzar_table with this data.
     */
    create: XOR<shahzar_tableCreateInput, shahzar_tableUncheckedCreateInput>
    /**
     * In case the shahzar_table was found with the provided `where` argument, update it with this data.
     */
    update: XOR<shahzar_tableUpdateInput, shahzar_tableUncheckedUpdateInput>
  }

  /**
   * shahzar_table delete
   */
  export type shahzar_tableDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the shahzar_table
     */
    select?: shahzar_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the shahzar_table
     */
    omit?: shahzar_tableOmit<ExtArgs> | null
    /**
     * Filter which shahzar_table to delete.
     */
    where: shahzar_tableWhereUniqueInput
  }

  /**
   * shahzar_table deleteMany
   */
  export type shahzar_tableDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which shahzar_tables to delete
     */
    where?: shahzar_tableWhereInput
    /**
     * Limit how many shahzar_tables to delete.
     */
    limit?: number
  }

  /**
   * shahzar_table without action
   */
  export type shahzar_tableDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the shahzar_table
     */
    select?: shahzar_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the shahzar_table
     */
    omit?: shahzar_tableOmit<ExtArgs> | null
  }


  /**
   * Model spider_logs
   */

  export type AggregateSpider_logs = {
    _count: Spider_logsCountAggregateOutputType | null
    _avg: Spider_logsAvgAggregateOutputType | null
    _sum: Spider_logsSumAggregateOutputType | null
    _min: Spider_logsMinAggregateOutputType | null
    _max: Spider_logsMaxAggregateOutputType | null
  }

  export type Spider_logsAvgAggregateOutputType = {
    id: number | null
    scraper_id: number | null
    duration_seconds: number | null
    retries: number | null
  }

  export type Spider_logsSumAggregateOutputType = {
    id: number | null
    scraper_id: number | null
    duration_seconds: number | null
    retries: number | null
  }

  export type Spider_logsMinAggregateOutputType = {
    id: number | null
    scraper_id: number | null
    scraper_name: string | null
    celery_trigger_time: Date | null
    actual_start_time: Date | null
    end_time: Date | null
    duration_seconds: number | null
    retries: number | null
    result: string | null
    terminal_notes: string | null
  }

  export type Spider_logsMaxAggregateOutputType = {
    id: number | null
    scraper_id: number | null
    scraper_name: string | null
    celery_trigger_time: Date | null
    actual_start_time: Date | null
    end_time: Date | null
    duration_seconds: number | null
    retries: number | null
    result: string | null
    terminal_notes: string | null
  }

  export type Spider_logsCountAggregateOutputType = {
    id: number
    scraper_id: number
    scraper_name: number
    celery_trigger_time: number
    actual_start_time: number
    end_time: number
    duration_seconds: number
    retries: number
    result: number
    terminal_notes: number
    _all: number
  }


  export type Spider_logsAvgAggregateInputType = {
    id?: true
    scraper_id?: true
    duration_seconds?: true
    retries?: true
  }

  export type Spider_logsSumAggregateInputType = {
    id?: true
    scraper_id?: true
    duration_seconds?: true
    retries?: true
  }

  export type Spider_logsMinAggregateInputType = {
    id?: true
    scraper_id?: true
    scraper_name?: true
    celery_trigger_time?: true
    actual_start_time?: true
    end_time?: true
    duration_seconds?: true
    retries?: true
    result?: true
    terminal_notes?: true
  }

  export type Spider_logsMaxAggregateInputType = {
    id?: true
    scraper_id?: true
    scraper_name?: true
    celery_trigger_time?: true
    actual_start_time?: true
    end_time?: true
    duration_seconds?: true
    retries?: true
    result?: true
    terminal_notes?: true
  }

  export type Spider_logsCountAggregateInputType = {
    id?: true
    scraper_id?: true
    scraper_name?: true
    celery_trigger_time?: true
    actual_start_time?: true
    end_time?: true
    duration_seconds?: true
    retries?: true
    result?: true
    terminal_notes?: true
    _all?: true
  }

  export type Spider_logsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which spider_logs to aggregate.
     */
    where?: spider_logsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of spider_logs to fetch.
     */
    orderBy?: spider_logsOrderByWithRelationInput | spider_logsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: spider_logsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` spider_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` spider_logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned spider_logs
    **/
    _count?: true | Spider_logsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Spider_logsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Spider_logsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Spider_logsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Spider_logsMaxAggregateInputType
  }

  export type GetSpider_logsAggregateType<T extends Spider_logsAggregateArgs> = {
        [P in keyof T & keyof AggregateSpider_logs]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSpider_logs[P]>
      : GetScalarType<T[P], AggregateSpider_logs[P]>
  }




  export type spider_logsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: spider_logsWhereInput
    orderBy?: spider_logsOrderByWithAggregationInput | spider_logsOrderByWithAggregationInput[]
    by: Spider_logsScalarFieldEnum[] | Spider_logsScalarFieldEnum
    having?: spider_logsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Spider_logsCountAggregateInputType | true
    _avg?: Spider_logsAvgAggregateInputType
    _sum?: Spider_logsSumAggregateInputType
    _min?: Spider_logsMinAggregateInputType
    _max?: Spider_logsMaxAggregateInputType
  }

  export type Spider_logsGroupByOutputType = {
    id: number
    scraper_id: number
    scraper_name: string
    celery_trigger_time: Date
    actual_start_time: Date
    end_time: Date | null
    duration_seconds: number | null
    retries: number | null
    result: string | null
    terminal_notes: string | null
    _count: Spider_logsCountAggregateOutputType | null
    _avg: Spider_logsAvgAggregateOutputType | null
    _sum: Spider_logsSumAggregateOutputType | null
    _min: Spider_logsMinAggregateOutputType | null
    _max: Spider_logsMaxAggregateOutputType | null
  }

  type GetSpider_logsGroupByPayload<T extends spider_logsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Spider_logsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Spider_logsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Spider_logsGroupByOutputType[P]>
            : GetScalarType<T[P], Spider_logsGroupByOutputType[P]>
        }
      >
    >


  export type spider_logsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    scraper_id?: boolean
    scraper_name?: boolean
    celery_trigger_time?: boolean
    actual_start_time?: boolean
    end_time?: boolean
    duration_seconds?: boolean
    retries?: boolean
    result?: boolean
    terminal_notes?: boolean
    listofscrapers?: boolean | listofscrapersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["spider_logs"]>

  export type spider_logsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    scraper_id?: boolean
    scraper_name?: boolean
    celery_trigger_time?: boolean
    actual_start_time?: boolean
    end_time?: boolean
    duration_seconds?: boolean
    retries?: boolean
    result?: boolean
    terminal_notes?: boolean
    listofscrapers?: boolean | listofscrapersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["spider_logs"]>

  export type spider_logsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    scraper_id?: boolean
    scraper_name?: boolean
    celery_trigger_time?: boolean
    actual_start_time?: boolean
    end_time?: boolean
    duration_seconds?: boolean
    retries?: boolean
    result?: boolean
    terminal_notes?: boolean
    listofscrapers?: boolean | listofscrapersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["spider_logs"]>

  export type spider_logsSelectScalar = {
    id?: boolean
    scraper_id?: boolean
    scraper_name?: boolean
    celery_trigger_time?: boolean
    actual_start_time?: boolean
    end_time?: boolean
    duration_seconds?: boolean
    retries?: boolean
    result?: boolean
    terminal_notes?: boolean
  }

  export type spider_logsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "scraper_id" | "scraper_name" | "celery_trigger_time" | "actual_start_time" | "end_time" | "duration_seconds" | "retries" | "result" | "terminal_notes", ExtArgs["result"]["spider_logs"]>
  export type spider_logsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    listofscrapers?: boolean | listofscrapersDefaultArgs<ExtArgs>
  }
  export type spider_logsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    listofscrapers?: boolean | listofscrapersDefaultArgs<ExtArgs>
  }
  export type spider_logsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    listofscrapers?: boolean | listofscrapersDefaultArgs<ExtArgs>
  }

  export type $spider_logsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "spider_logs"
    objects: {
      listofscrapers: Prisma.$listofscrapersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      scraper_id: number
      scraper_name: string
      celery_trigger_time: Date
      actual_start_time: Date
      end_time: Date | null
      duration_seconds: number | null
      retries: number | null
      result: string | null
      terminal_notes: string | null
    }, ExtArgs["result"]["spider_logs"]>
    composites: {}
  }

  type spider_logsGetPayload<S extends boolean | null | undefined | spider_logsDefaultArgs> = $Result.GetResult<Prisma.$spider_logsPayload, S>

  type spider_logsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<spider_logsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Spider_logsCountAggregateInputType | true
    }

  export interface spider_logsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['spider_logs'], meta: { name: 'spider_logs' } }
    /**
     * Find zero or one Spider_logs that matches the filter.
     * @param {spider_logsFindUniqueArgs} args - Arguments to find a Spider_logs
     * @example
     * // Get one Spider_logs
     * const spider_logs = await prisma.spider_logs.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends spider_logsFindUniqueArgs>(args: SelectSubset<T, spider_logsFindUniqueArgs<ExtArgs>>): Prisma__spider_logsClient<$Result.GetResult<Prisma.$spider_logsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Spider_logs that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {spider_logsFindUniqueOrThrowArgs} args - Arguments to find a Spider_logs
     * @example
     * // Get one Spider_logs
     * const spider_logs = await prisma.spider_logs.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends spider_logsFindUniqueOrThrowArgs>(args: SelectSubset<T, spider_logsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__spider_logsClient<$Result.GetResult<Prisma.$spider_logsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Spider_logs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {spider_logsFindFirstArgs} args - Arguments to find a Spider_logs
     * @example
     * // Get one Spider_logs
     * const spider_logs = await prisma.spider_logs.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends spider_logsFindFirstArgs>(args?: SelectSubset<T, spider_logsFindFirstArgs<ExtArgs>>): Prisma__spider_logsClient<$Result.GetResult<Prisma.$spider_logsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Spider_logs that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {spider_logsFindFirstOrThrowArgs} args - Arguments to find a Spider_logs
     * @example
     * // Get one Spider_logs
     * const spider_logs = await prisma.spider_logs.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends spider_logsFindFirstOrThrowArgs>(args?: SelectSubset<T, spider_logsFindFirstOrThrowArgs<ExtArgs>>): Prisma__spider_logsClient<$Result.GetResult<Prisma.$spider_logsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Spider_logs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {spider_logsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Spider_logs
     * const spider_logs = await prisma.spider_logs.findMany()
     * 
     * // Get first 10 Spider_logs
     * const spider_logs = await prisma.spider_logs.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const spider_logsWithIdOnly = await prisma.spider_logs.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends spider_logsFindManyArgs>(args?: SelectSubset<T, spider_logsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$spider_logsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Spider_logs.
     * @param {spider_logsCreateArgs} args - Arguments to create a Spider_logs.
     * @example
     * // Create one Spider_logs
     * const Spider_logs = await prisma.spider_logs.create({
     *   data: {
     *     // ... data to create a Spider_logs
     *   }
     * })
     * 
     */
    create<T extends spider_logsCreateArgs>(args: SelectSubset<T, spider_logsCreateArgs<ExtArgs>>): Prisma__spider_logsClient<$Result.GetResult<Prisma.$spider_logsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Spider_logs.
     * @param {spider_logsCreateManyArgs} args - Arguments to create many Spider_logs.
     * @example
     * // Create many Spider_logs
     * const spider_logs = await prisma.spider_logs.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends spider_logsCreateManyArgs>(args?: SelectSubset<T, spider_logsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Spider_logs and returns the data saved in the database.
     * @param {spider_logsCreateManyAndReturnArgs} args - Arguments to create many Spider_logs.
     * @example
     * // Create many Spider_logs
     * const spider_logs = await prisma.spider_logs.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Spider_logs and only return the `id`
     * const spider_logsWithIdOnly = await prisma.spider_logs.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends spider_logsCreateManyAndReturnArgs>(args?: SelectSubset<T, spider_logsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$spider_logsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Spider_logs.
     * @param {spider_logsDeleteArgs} args - Arguments to delete one Spider_logs.
     * @example
     * // Delete one Spider_logs
     * const Spider_logs = await prisma.spider_logs.delete({
     *   where: {
     *     // ... filter to delete one Spider_logs
     *   }
     * })
     * 
     */
    delete<T extends spider_logsDeleteArgs>(args: SelectSubset<T, spider_logsDeleteArgs<ExtArgs>>): Prisma__spider_logsClient<$Result.GetResult<Prisma.$spider_logsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Spider_logs.
     * @param {spider_logsUpdateArgs} args - Arguments to update one Spider_logs.
     * @example
     * // Update one Spider_logs
     * const spider_logs = await prisma.spider_logs.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends spider_logsUpdateArgs>(args: SelectSubset<T, spider_logsUpdateArgs<ExtArgs>>): Prisma__spider_logsClient<$Result.GetResult<Prisma.$spider_logsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Spider_logs.
     * @param {spider_logsDeleteManyArgs} args - Arguments to filter Spider_logs to delete.
     * @example
     * // Delete a few Spider_logs
     * const { count } = await prisma.spider_logs.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends spider_logsDeleteManyArgs>(args?: SelectSubset<T, spider_logsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Spider_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {spider_logsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Spider_logs
     * const spider_logs = await prisma.spider_logs.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends spider_logsUpdateManyArgs>(args: SelectSubset<T, spider_logsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Spider_logs and returns the data updated in the database.
     * @param {spider_logsUpdateManyAndReturnArgs} args - Arguments to update many Spider_logs.
     * @example
     * // Update many Spider_logs
     * const spider_logs = await prisma.spider_logs.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Spider_logs and only return the `id`
     * const spider_logsWithIdOnly = await prisma.spider_logs.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends spider_logsUpdateManyAndReturnArgs>(args: SelectSubset<T, spider_logsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$spider_logsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Spider_logs.
     * @param {spider_logsUpsertArgs} args - Arguments to update or create a Spider_logs.
     * @example
     * // Update or create a Spider_logs
     * const spider_logs = await prisma.spider_logs.upsert({
     *   create: {
     *     // ... data to create a Spider_logs
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Spider_logs we want to update
     *   }
     * })
     */
    upsert<T extends spider_logsUpsertArgs>(args: SelectSubset<T, spider_logsUpsertArgs<ExtArgs>>): Prisma__spider_logsClient<$Result.GetResult<Prisma.$spider_logsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Spider_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {spider_logsCountArgs} args - Arguments to filter Spider_logs to count.
     * @example
     * // Count the number of Spider_logs
     * const count = await prisma.spider_logs.count({
     *   where: {
     *     // ... the filter for the Spider_logs we want to count
     *   }
     * })
    **/
    count<T extends spider_logsCountArgs>(
      args?: Subset<T, spider_logsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Spider_logsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Spider_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Spider_logsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Spider_logsAggregateArgs>(args: Subset<T, Spider_logsAggregateArgs>): Prisma.PrismaPromise<GetSpider_logsAggregateType<T>>

    /**
     * Group by Spider_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {spider_logsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends spider_logsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: spider_logsGroupByArgs['orderBy'] }
        : { orderBy?: spider_logsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, spider_logsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSpider_logsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the spider_logs model
   */
  readonly fields: spider_logsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for spider_logs.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__spider_logsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    listofscrapers<T extends listofscrapersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, listofscrapersDefaultArgs<ExtArgs>>): Prisma__listofscrapersClient<$Result.GetResult<Prisma.$listofscrapersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the spider_logs model
   */
  interface spider_logsFieldRefs {
    readonly id: FieldRef<"spider_logs", 'Int'>
    readonly scraper_id: FieldRef<"spider_logs", 'Int'>
    readonly scraper_name: FieldRef<"spider_logs", 'String'>
    readonly celery_trigger_time: FieldRef<"spider_logs", 'DateTime'>
    readonly actual_start_time: FieldRef<"spider_logs", 'DateTime'>
    readonly end_time: FieldRef<"spider_logs", 'DateTime'>
    readonly duration_seconds: FieldRef<"spider_logs", 'Int'>
    readonly retries: FieldRef<"spider_logs", 'Int'>
    readonly result: FieldRef<"spider_logs", 'String'>
    readonly terminal_notes: FieldRef<"spider_logs", 'String'>
  }
    

  // Custom InputTypes
  /**
   * spider_logs findUnique
   */
  export type spider_logsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the spider_logs
     */
    select?: spider_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the spider_logs
     */
    omit?: spider_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: spider_logsInclude<ExtArgs> | null
    /**
     * Filter, which spider_logs to fetch.
     */
    where: spider_logsWhereUniqueInput
  }

  /**
   * spider_logs findUniqueOrThrow
   */
  export type spider_logsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the spider_logs
     */
    select?: spider_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the spider_logs
     */
    omit?: spider_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: spider_logsInclude<ExtArgs> | null
    /**
     * Filter, which spider_logs to fetch.
     */
    where: spider_logsWhereUniqueInput
  }

  /**
   * spider_logs findFirst
   */
  export type spider_logsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the spider_logs
     */
    select?: spider_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the spider_logs
     */
    omit?: spider_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: spider_logsInclude<ExtArgs> | null
    /**
     * Filter, which spider_logs to fetch.
     */
    where?: spider_logsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of spider_logs to fetch.
     */
    orderBy?: spider_logsOrderByWithRelationInput | spider_logsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for spider_logs.
     */
    cursor?: spider_logsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` spider_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` spider_logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of spider_logs.
     */
    distinct?: Spider_logsScalarFieldEnum | Spider_logsScalarFieldEnum[]
  }

  /**
   * spider_logs findFirstOrThrow
   */
  export type spider_logsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the spider_logs
     */
    select?: spider_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the spider_logs
     */
    omit?: spider_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: spider_logsInclude<ExtArgs> | null
    /**
     * Filter, which spider_logs to fetch.
     */
    where?: spider_logsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of spider_logs to fetch.
     */
    orderBy?: spider_logsOrderByWithRelationInput | spider_logsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for spider_logs.
     */
    cursor?: spider_logsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` spider_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` spider_logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of spider_logs.
     */
    distinct?: Spider_logsScalarFieldEnum | Spider_logsScalarFieldEnum[]
  }

  /**
   * spider_logs findMany
   */
  export type spider_logsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the spider_logs
     */
    select?: spider_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the spider_logs
     */
    omit?: spider_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: spider_logsInclude<ExtArgs> | null
    /**
     * Filter, which spider_logs to fetch.
     */
    where?: spider_logsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of spider_logs to fetch.
     */
    orderBy?: spider_logsOrderByWithRelationInput | spider_logsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing spider_logs.
     */
    cursor?: spider_logsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` spider_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` spider_logs.
     */
    skip?: number
    distinct?: Spider_logsScalarFieldEnum | Spider_logsScalarFieldEnum[]
  }

  /**
   * spider_logs create
   */
  export type spider_logsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the spider_logs
     */
    select?: spider_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the spider_logs
     */
    omit?: spider_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: spider_logsInclude<ExtArgs> | null
    /**
     * The data needed to create a spider_logs.
     */
    data: XOR<spider_logsCreateInput, spider_logsUncheckedCreateInput>
  }

  /**
   * spider_logs createMany
   */
  export type spider_logsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many spider_logs.
     */
    data: spider_logsCreateManyInput | spider_logsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * spider_logs createManyAndReturn
   */
  export type spider_logsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the spider_logs
     */
    select?: spider_logsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the spider_logs
     */
    omit?: spider_logsOmit<ExtArgs> | null
    /**
     * The data used to create many spider_logs.
     */
    data: spider_logsCreateManyInput | spider_logsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: spider_logsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * spider_logs update
   */
  export type spider_logsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the spider_logs
     */
    select?: spider_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the spider_logs
     */
    omit?: spider_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: spider_logsInclude<ExtArgs> | null
    /**
     * The data needed to update a spider_logs.
     */
    data: XOR<spider_logsUpdateInput, spider_logsUncheckedUpdateInput>
    /**
     * Choose, which spider_logs to update.
     */
    where: spider_logsWhereUniqueInput
  }

  /**
   * spider_logs updateMany
   */
  export type spider_logsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update spider_logs.
     */
    data: XOR<spider_logsUpdateManyMutationInput, spider_logsUncheckedUpdateManyInput>
    /**
     * Filter which spider_logs to update
     */
    where?: spider_logsWhereInput
    /**
     * Limit how many spider_logs to update.
     */
    limit?: number
  }

  /**
   * spider_logs updateManyAndReturn
   */
  export type spider_logsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the spider_logs
     */
    select?: spider_logsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the spider_logs
     */
    omit?: spider_logsOmit<ExtArgs> | null
    /**
     * The data used to update spider_logs.
     */
    data: XOR<spider_logsUpdateManyMutationInput, spider_logsUncheckedUpdateManyInput>
    /**
     * Filter which spider_logs to update
     */
    where?: spider_logsWhereInput
    /**
     * Limit how many spider_logs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: spider_logsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * spider_logs upsert
   */
  export type spider_logsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the spider_logs
     */
    select?: spider_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the spider_logs
     */
    omit?: spider_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: spider_logsInclude<ExtArgs> | null
    /**
     * The filter to search for the spider_logs to update in case it exists.
     */
    where: spider_logsWhereUniqueInput
    /**
     * In case the spider_logs found by the `where` argument doesn't exist, create a new spider_logs with this data.
     */
    create: XOR<spider_logsCreateInput, spider_logsUncheckedCreateInput>
    /**
     * In case the spider_logs was found with the provided `where` argument, update it with this data.
     */
    update: XOR<spider_logsUpdateInput, spider_logsUncheckedUpdateInput>
  }

  /**
   * spider_logs delete
   */
  export type spider_logsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the spider_logs
     */
    select?: spider_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the spider_logs
     */
    omit?: spider_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: spider_logsInclude<ExtArgs> | null
    /**
     * Filter which spider_logs to delete.
     */
    where: spider_logsWhereUniqueInput
  }

  /**
   * spider_logs deleteMany
   */
  export type spider_logsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which spider_logs to delete
     */
    where?: spider_logsWhereInput
    /**
     * Limit how many spider_logs to delete.
     */
    limit?: number
  }

  /**
   * spider_logs without action
   */
  export type spider_logsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the spider_logs
     */
    select?: spider_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the spider_logs
     */
    omit?: spider_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: spider_logsInclude<ExtArgs> | null
  }


  /**
   * Model stores
   */

  export type AggregateStores = {
    _count: StoresCountAggregateOutputType | null
    _avg: StoresAvgAggregateOutputType | null
    _sum: StoresSumAggregateOutputType | null
    _min: StoresMinAggregateOutputType | null
    _max: StoresMaxAggregateOutputType | null
  }

  export type StoresAvgAggregateOutputType = {
    store_id: number | null
  }

  export type StoresSumAggregateOutputType = {
    store_id: number | null
  }

  export type StoresMinAggregateOutputType = {
    store_id: number | null
    store_name: string | null
    last_retrieved_on: Date | null
    created_at: Date | null
  }

  export type StoresMaxAggregateOutputType = {
    store_id: number | null
    store_name: string | null
    last_retrieved_on: Date | null
    created_at: Date | null
  }

  export type StoresCountAggregateOutputType = {
    store_id: number
    store_name: number
    last_retrieved_on: number
    created_at: number
    _all: number
  }


  export type StoresAvgAggregateInputType = {
    store_id?: true
  }

  export type StoresSumAggregateInputType = {
    store_id?: true
  }

  export type StoresMinAggregateInputType = {
    store_id?: true
    store_name?: true
    last_retrieved_on?: true
    created_at?: true
  }

  export type StoresMaxAggregateInputType = {
    store_id?: true
    store_name?: true
    last_retrieved_on?: true
    created_at?: true
  }

  export type StoresCountAggregateInputType = {
    store_id?: true
    store_name?: true
    last_retrieved_on?: true
    created_at?: true
    _all?: true
  }

  export type StoresAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which stores to aggregate.
     */
    where?: storesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of stores to fetch.
     */
    orderBy?: storesOrderByWithRelationInput | storesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: storesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` stores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` stores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned stores
    **/
    _count?: true | StoresCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StoresAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StoresSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StoresMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StoresMaxAggregateInputType
  }

  export type GetStoresAggregateType<T extends StoresAggregateArgs> = {
        [P in keyof T & keyof AggregateStores]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStores[P]>
      : GetScalarType<T[P], AggregateStores[P]>
  }




  export type storesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: storesWhereInput
    orderBy?: storesOrderByWithAggregationInput | storesOrderByWithAggregationInput[]
    by: StoresScalarFieldEnum[] | StoresScalarFieldEnum
    having?: storesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StoresCountAggregateInputType | true
    _avg?: StoresAvgAggregateInputType
    _sum?: StoresSumAggregateInputType
    _min?: StoresMinAggregateInputType
    _max?: StoresMaxAggregateInputType
  }

  export type StoresGroupByOutputType = {
    store_id: number
    store_name: string
    last_retrieved_on: Date | null
    created_at: Date | null
    _count: StoresCountAggregateOutputType | null
    _avg: StoresAvgAggregateOutputType | null
    _sum: StoresSumAggregateOutputType | null
    _min: StoresMinAggregateOutputType | null
    _max: StoresMaxAggregateOutputType | null
  }

  type GetStoresGroupByPayload<T extends storesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StoresGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StoresGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StoresGroupByOutputType[P]>
            : GetScalarType<T[P], StoresGroupByOutputType[P]>
        }
      >
    >


  export type storesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    store_id?: boolean
    store_name?: boolean
    last_retrieved_on?: boolean
    created_at?: boolean
    products?: boolean | stores$productsArgs<ExtArgs>
    _count?: boolean | StoresCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stores"]>

  export type storesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    store_id?: boolean
    store_name?: boolean
    last_retrieved_on?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["stores"]>

  export type storesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    store_id?: boolean
    store_name?: boolean
    last_retrieved_on?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["stores"]>

  export type storesSelectScalar = {
    store_id?: boolean
    store_name?: boolean
    last_retrieved_on?: boolean
    created_at?: boolean
  }

  export type storesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"store_id" | "store_name" | "last_retrieved_on" | "created_at", ExtArgs["result"]["stores"]>
  export type storesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | stores$productsArgs<ExtArgs>
    _count?: boolean | StoresCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type storesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type storesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $storesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "stores"
    objects: {
      products: Prisma.$productsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      store_id: number
      store_name: string
      last_retrieved_on: Date | null
      created_at: Date | null
    }, ExtArgs["result"]["stores"]>
    composites: {}
  }

  type storesGetPayload<S extends boolean | null | undefined | storesDefaultArgs> = $Result.GetResult<Prisma.$storesPayload, S>

  type storesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<storesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StoresCountAggregateInputType | true
    }

  export interface storesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['stores'], meta: { name: 'stores' } }
    /**
     * Find zero or one Stores that matches the filter.
     * @param {storesFindUniqueArgs} args - Arguments to find a Stores
     * @example
     * // Get one Stores
     * const stores = await prisma.stores.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends storesFindUniqueArgs>(args: SelectSubset<T, storesFindUniqueArgs<ExtArgs>>): Prisma__storesClient<$Result.GetResult<Prisma.$storesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Stores that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {storesFindUniqueOrThrowArgs} args - Arguments to find a Stores
     * @example
     * // Get one Stores
     * const stores = await prisma.stores.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends storesFindUniqueOrThrowArgs>(args: SelectSubset<T, storesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__storesClient<$Result.GetResult<Prisma.$storesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Stores that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {storesFindFirstArgs} args - Arguments to find a Stores
     * @example
     * // Get one Stores
     * const stores = await prisma.stores.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends storesFindFirstArgs>(args?: SelectSubset<T, storesFindFirstArgs<ExtArgs>>): Prisma__storesClient<$Result.GetResult<Prisma.$storesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Stores that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {storesFindFirstOrThrowArgs} args - Arguments to find a Stores
     * @example
     * // Get one Stores
     * const stores = await prisma.stores.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends storesFindFirstOrThrowArgs>(args?: SelectSubset<T, storesFindFirstOrThrowArgs<ExtArgs>>): Prisma__storesClient<$Result.GetResult<Prisma.$storesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Stores that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {storesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Stores
     * const stores = await prisma.stores.findMany()
     * 
     * // Get first 10 Stores
     * const stores = await prisma.stores.findMany({ take: 10 })
     * 
     * // Only select the `store_id`
     * const storesWithStore_idOnly = await prisma.stores.findMany({ select: { store_id: true } })
     * 
     */
    findMany<T extends storesFindManyArgs>(args?: SelectSubset<T, storesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$storesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Stores.
     * @param {storesCreateArgs} args - Arguments to create a Stores.
     * @example
     * // Create one Stores
     * const Stores = await prisma.stores.create({
     *   data: {
     *     // ... data to create a Stores
     *   }
     * })
     * 
     */
    create<T extends storesCreateArgs>(args: SelectSubset<T, storesCreateArgs<ExtArgs>>): Prisma__storesClient<$Result.GetResult<Prisma.$storesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Stores.
     * @param {storesCreateManyArgs} args - Arguments to create many Stores.
     * @example
     * // Create many Stores
     * const stores = await prisma.stores.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends storesCreateManyArgs>(args?: SelectSubset<T, storesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Stores and returns the data saved in the database.
     * @param {storesCreateManyAndReturnArgs} args - Arguments to create many Stores.
     * @example
     * // Create many Stores
     * const stores = await prisma.stores.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Stores and only return the `store_id`
     * const storesWithStore_idOnly = await prisma.stores.createManyAndReturn({
     *   select: { store_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends storesCreateManyAndReturnArgs>(args?: SelectSubset<T, storesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$storesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Stores.
     * @param {storesDeleteArgs} args - Arguments to delete one Stores.
     * @example
     * // Delete one Stores
     * const Stores = await prisma.stores.delete({
     *   where: {
     *     // ... filter to delete one Stores
     *   }
     * })
     * 
     */
    delete<T extends storesDeleteArgs>(args: SelectSubset<T, storesDeleteArgs<ExtArgs>>): Prisma__storesClient<$Result.GetResult<Prisma.$storesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Stores.
     * @param {storesUpdateArgs} args - Arguments to update one Stores.
     * @example
     * // Update one Stores
     * const stores = await prisma.stores.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends storesUpdateArgs>(args: SelectSubset<T, storesUpdateArgs<ExtArgs>>): Prisma__storesClient<$Result.GetResult<Prisma.$storesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Stores.
     * @param {storesDeleteManyArgs} args - Arguments to filter Stores to delete.
     * @example
     * // Delete a few Stores
     * const { count } = await prisma.stores.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends storesDeleteManyArgs>(args?: SelectSubset<T, storesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {storesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Stores
     * const stores = await prisma.stores.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends storesUpdateManyArgs>(args: SelectSubset<T, storesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stores and returns the data updated in the database.
     * @param {storesUpdateManyAndReturnArgs} args - Arguments to update many Stores.
     * @example
     * // Update many Stores
     * const stores = await prisma.stores.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Stores and only return the `store_id`
     * const storesWithStore_idOnly = await prisma.stores.updateManyAndReturn({
     *   select: { store_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends storesUpdateManyAndReturnArgs>(args: SelectSubset<T, storesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$storesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Stores.
     * @param {storesUpsertArgs} args - Arguments to update or create a Stores.
     * @example
     * // Update or create a Stores
     * const stores = await prisma.stores.upsert({
     *   create: {
     *     // ... data to create a Stores
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Stores we want to update
     *   }
     * })
     */
    upsert<T extends storesUpsertArgs>(args: SelectSubset<T, storesUpsertArgs<ExtArgs>>): Prisma__storesClient<$Result.GetResult<Prisma.$storesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Stores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {storesCountArgs} args - Arguments to filter Stores to count.
     * @example
     * // Count the number of Stores
     * const count = await prisma.stores.count({
     *   where: {
     *     // ... the filter for the Stores we want to count
     *   }
     * })
    **/
    count<T extends storesCountArgs>(
      args?: Subset<T, storesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StoresCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Stores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoresAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StoresAggregateArgs>(args: Subset<T, StoresAggregateArgs>): Prisma.PrismaPromise<GetStoresAggregateType<T>>

    /**
     * Group by Stores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {storesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends storesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: storesGroupByArgs['orderBy'] }
        : { orderBy?: storesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, storesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStoresGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the stores model
   */
  readonly fields: storesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for stores.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__storesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    products<T extends stores$productsArgs<ExtArgs> = {}>(args?: Subset<T, stores$productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the stores model
   */
  interface storesFieldRefs {
    readonly store_id: FieldRef<"stores", 'Int'>
    readonly store_name: FieldRef<"stores", 'String'>
    readonly last_retrieved_on: FieldRef<"stores", 'DateTime'>
    readonly created_at: FieldRef<"stores", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * stores findUnique
   */
  export type storesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stores
     */
    select?: storesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stores
     */
    omit?: storesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: storesInclude<ExtArgs> | null
    /**
     * Filter, which stores to fetch.
     */
    where: storesWhereUniqueInput
  }

  /**
   * stores findUniqueOrThrow
   */
  export type storesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stores
     */
    select?: storesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stores
     */
    omit?: storesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: storesInclude<ExtArgs> | null
    /**
     * Filter, which stores to fetch.
     */
    where: storesWhereUniqueInput
  }

  /**
   * stores findFirst
   */
  export type storesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stores
     */
    select?: storesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stores
     */
    omit?: storesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: storesInclude<ExtArgs> | null
    /**
     * Filter, which stores to fetch.
     */
    where?: storesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of stores to fetch.
     */
    orderBy?: storesOrderByWithRelationInput | storesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for stores.
     */
    cursor?: storesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` stores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` stores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of stores.
     */
    distinct?: StoresScalarFieldEnum | StoresScalarFieldEnum[]
  }

  /**
   * stores findFirstOrThrow
   */
  export type storesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stores
     */
    select?: storesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stores
     */
    omit?: storesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: storesInclude<ExtArgs> | null
    /**
     * Filter, which stores to fetch.
     */
    where?: storesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of stores to fetch.
     */
    orderBy?: storesOrderByWithRelationInput | storesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for stores.
     */
    cursor?: storesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` stores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` stores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of stores.
     */
    distinct?: StoresScalarFieldEnum | StoresScalarFieldEnum[]
  }

  /**
   * stores findMany
   */
  export type storesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stores
     */
    select?: storesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stores
     */
    omit?: storesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: storesInclude<ExtArgs> | null
    /**
     * Filter, which stores to fetch.
     */
    where?: storesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of stores to fetch.
     */
    orderBy?: storesOrderByWithRelationInput | storesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing stores.
     */
    cursor?: storesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` stores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` stores.
     */
    skip?: number
    distinct?: StoresScalarFieldEnum | StoresScalarFieldEnum[]
  }

  /**
   * stores create
   */
  export type storesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stores
     */
    select?: storesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stores
     */
    omit?: storesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: storesInclude<ExtArgs> | null
    /**
     * The data needed to create a stores.
     */
    data: XOR<storesCreateInput, storesUncheckedCreateInput>
  }

  /**
   * stores createMany
   */
  export type storesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many stores.
     */
    data: storesCreateManyInput | storesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * stores createManyAndReturn
   */
  export type storesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stores
     */
    select?: storesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the stores
     */
    omit?: storesOmit<ExtArgs> | null
    /**
     * The data used to create many stores.
     */
    data: storesCreateManyInput | storesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * stores update
   */
  export type storesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stores
     */
    select?: storesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stores
     */
    omit?: storesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: storesInclude<ExtArgs> | null
    /**
     * The data needed to update a stores.
     */
    data: XOR<storesUpdateInput, storesUncheckedUpdateInput>
    /**
     * Choose, which stores to update.
     */
    where: storesWhereUniqueInput
  }

  /**
   * stores updateMany
   */
  export type storesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update stores.
     */
    data: XOR<storesUpdateManyMutationInput, storesUncheckedUpdateManyInput>
    /**
     * Filter which stores to update
     */
    where?: storesWhereInput
    /**
     * Limit how many stores to update.
     */
    limit?: number
  }

  /**
   * stores updateManyAndReturn
   */
  export type storesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stores
     */
    select?: storesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the stores
     */
    omit?: storesOmit<ExtArgs> | null
    /**
     * The data used to update stores.
     */
    data: XOR<storesUpdateManyMutationInput, storesUncheckedUpdateManyInput>
    /**
     * Filter which stores to update
     */
    where?: storesWhereInput
    /**
     * Limit how many stores to update.
     */
    limit?: number
  }

  /**
   * stores upsert
   */
  export type storesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stores
     */
    select?: storesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stores
     */
    omit?: storesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: storesInclude<ExtArgs> | null
    /**
     * The filter to search for the stores to update in case it exists.
     */
    where: storesWhereUniqueInput
    /**
     * In case the stores found by the `where` argument doesn't exist, create a new stores with this data.
     */
    create: XOR<storesCreateInput, storesUncheckedCreateInput>
    /**
     * In case the stores was found with the provided `where` argument, update it with this data.
     */
    update: XOR<storesUpdateInput, storesUncheckedUpdateInput>
  }

  /**
   * stores delete
   */
  export type storesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stores
     */
    select?: storesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stores
     */
    omit?: storesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: storesInclude<ExtArgs> | null
    /**
     * Filter which stores to delete.
     */
    where: storesWhereUniqueInput
  }

  /**
   * stores deleteMany
   */
  export type storesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which stores to delete
     */
    where?: storesWhereInput
    /**
     * Limit how many stores to delete.
     */
    limit?: number
  }

  /**
   * stores.products
   */
  export type stores$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    where?: productsWhereInput
    orderBy?: productsOrderByWithRelationInput | productsOrderByWithRelationInput[]
    cursor?: productsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * stores without action
   */
  export type storesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stores
     */
    select?: storesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stores
     */
    omit?: storesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: storesInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ListofscrapersScalarFieldEnum: {
    id: 'id',
    name: 'name',
    status: 'status',
    created_on: 'created_on',
    last_modified: 'last_modified',
    last_ran: 'last_ran'
  };

  export type ListofscrapersScalarFieldEnum = (typeof ListofscrapersScalarFieldEnum)[keyof typeof ListofscrapersScalarFieldEnum]


  export const Product_pricesScalarFieldEnum: {
    price_id: 'price_id',
    product_id: 'product_id',
    price: 'price',
    retrieved_on: 'retrieved_on'
  };

  export type Product_pricesScalarFieldEnum = (typeof Product_pricesScalarFieldEnum)[keyof typeof Product_pricesScalarFieldEnum]


  export const ProductsScalarFieldEnum: {
    product_id: 'product_id',
    store_id: 'store_id',
    product_name: 'product_name',
    product_url: 'product_url',
    is_active: 'is_active',
    created_at: 'created_at',
    image_urls: 'image_urls',
    latest_price: 'latest_price',
    categories: 'categories'
  };

  export type ProductsScalarFieldEnum = (typeof ProductsScalarFieldEnum)[keyof typeof ProductsScalarFieldEnum]


  export const Shahzar_tableScalarFieldEnum: {
    id: 'id',
    name: 'name',
    price: 'price',
    image: 'image',
    url: 'url',
    store: 'store'
  };

  export type Shahzar_tableScalarFieldEnum = (typeof Shahzar_tableScalarFieldEnum)[keyof typeof Shahzar_tableScalarFieldEnum]


  export const Spider_logsScalarFieldEnum: {
    id: 'id',
    scraper_id: 'scraper_id',
    scraper_name: 'scraper_name',
    celery_trigger_time: 'celery_trigger_time',
    actual_start_time: 'actual_start_time',
    end_time: 'end_time',
    duration_seconds: 'duration_seconds',
    retries: 'retries',
    result: 'result',
    terminal_notes: 'terminal_notes'
  };

  export type Spider_logsScalarFieldEnum = (typeof Spider_logsScalarFieldEnum)[keyof typeof Spider_logsScalarFieldEnum]


  export const StoresScalarFieldEnum: {
    store_id: 'store_id',
    store_name: 'store_name',
    last_retrieved_on: 'last_retrieved_on',
    created_at: 'created_at'
  };

  export type StoresScalarFieldEnum = (typeof StoresScalarFieldEnum)[keyof typeof StoresScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type listofscrapersWhereInput = {
    AND?: listofscrapersWhereInput | listofscrapersWhereInput[]
    OR?: listofscrapersWhereInput[]
    NOT?: listofscrapersWhereInput | listofscrapersWhereInput[]
    id?: IntFilter<"listofscrapers"> | number
    name?: StringFilter<"listofscrapers"> | string
    status?: StringNullableFilter<"listofscrapers"> | string | null
    created_on?: DateTimeFilter<"listofscrapers"> | Date | string
    last_modified?: DateTimeNullableFilter<"listofscrapers"> | Date | string | null
    last_ran?: DateTimeNullableFilter<"listofscrapers"> | Date | string | null
    spider_logs?: Spider_logsListRelationFilter
  }

  export type listofscrapersOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    status?: SortOrderInput | SortOrder
    created_on?: SortOrder
    last_modified?: SortOrderInput | SortOrder
    last_ran?: SortOrderInput | SortOrder
    spider_logs?: spider_logsOrderByRelationAggregateInput
  }

  export type listofscrapersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: listofscrapersWhereInput | listofscrapersWhereInput[]
    OR?: listofscrapersWhereInput[]
    NOT?: listofscrapersWhereInput | listofscrapersWhereInput[]
    status?: StringNullableFilter<"listofscrapers"> | string | null
    created_on?: DateTimeFilter<"listofscrapers"> | Date | string
    last_modified?: DateTimeNullableFilter<"listofscrapers"> | Date | string | null
    last_ran?: DateTimeNullableFilter<"listofscrapers"> | Date | string | null
    spider_logs?: Spider_logsListRelationFilter
  }, "id" | "name">

  export type listofscrapersOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    status?: SortOrderInput | SortOrder
    created_on?: SortOrder
    last_modified?: SortOrderInput | SortOrder
    last_ran?: SortOrderInput | SortOrder
    _count?: listofscrapersCountOrderByAggregateInput
    _avg?: listofscrapersAvgOrderByAggregateInput
    _max?: listofscrapersMaxOrderByAggregateInput
    _min?: listofscrapersMinOrderByAggregateInput
    _sum?: listofscrapersSumOrderByAggregateInput
  }

  export type listofscrapersScalarWhereWithAggregatesInput = {
    AND?: listofscrapersScalarWhereWithAggregatesInput | listofscrapersScalarWhereWithAggregatesInput[]
    OR?: listofscrapersScalarWhereWithAggregatesInput[]
    NOT?: listofscrapersScalarWhereWithAggregatesInput | listofscrapersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"listofscrapers"> | number
    name?: StringWithAggregatesFilter<"listofscrapers"> | string
    status?: StringNullableWithAggregatesFilter<"listofscrapers"> | string | null
    created_on?: DateTimeWithAggregatesFilter<"listofscrapers"> | Date | string
    last_modified?: DateTimeNullableWithAggregatesFilter<"listofscrapers"> | Date | string | null
    last_ran?: DateTimeNullableWithAggregatesFilter<"listofscrapers"> | Date | string | null
  }

  export type product_pricesWhereInput = {
    AND?: product_pricesWhereInput | product_pricesWhereInput[]
    OR?: product_pricesWhereInput[]
    NOT?: product_pricesWhereInput | product_pricesWhereInput[]
    price_id?: IntFilter<"product_prices"> | number
    product_id?: IntFilter<"product_prices"> | number
    price?: DecimalFilter<"product_prices"> | Decimal | DecimalJsLike | number | string
    retrieved_on?: DateTimeFilter<"product_prices"> | Date | string
    products?: XOR<ProductsScalarRelationFilter, productsWhereInput>
  }

  export type product_pricesOrderByWithRelationInput = {
    price_id?: SortOrder
    product_id?: SortOrder
    price?: SortOrder
    retrieved_on?: SortOrder
    products?: productsOrderByWithRelationInput
  }

  export type product_pricesWhereUniqueInput = Prisma.AtLeast<{
    price_id?: number
    AND?: product_pricesWhereInput | product_pricesWhereInput[]
    OR?: product_pricesWhereInput[]
    NOT?: product_pricesWhereInput | product_pricesWhereInput[]
    product_id?: IntFilter<"product_prices"> | number
    price?: DecimalFilter<"product_prices"> | Decimal | DecimalJsLike | number | string
    retrieved_on?: DateTimeFilter<"product_prices"> | Date | string
    products?: XOR<ProductsScalarRelationFilter, productsWhereInput>
  }, "price_id">

  export type product_pricesOrderByWithAggregationInput = {
    price_id?: SortOrder
    product_id?: SortOrder
    price?: SortOrder
    retrieved_on?: SortOrder
    _count?: product_pricesCountOrderByAggregateInput
    _avg?: product_pricesAvgOrderByAggregateInput
    _max?: product_pricesMaxOrderByAggregateInput
    _min?: product_pricesMinOrderByAggregateInput
    _sum?: product_pricesSumOrderByAggregateInput
  }

  export type product_pricesScalarWhereWithAggregatesInput = {
    AND?: product_pricesScalarWhereWithAggregatesInput | product_pricesScalarWhereWithAggregatesInput[]
    OR?: product_pricesScalarWhereWithAggregatesInput[]
    NOT?: product_pricesScalarWhereWithAggregatesInput | product_pricesScalarWhereWithAggregatesInput[]
    price_id?: IntWithAggregatesFilter<"product_prices"> | number
    product_id?: IntWithAggregatesFilter<"product_prices"> | number
    price?: DecimalWithAggregatesFilter<"product_prices"> | Decimal | DecimalJsLike | number | string
    retrieved_on?: DateTimeWithAggregatesFilter<"product_prices"> | Date | string
  }

  export type productsWhereInput = {
    AND?: productsWhereInput | productsWhereInput[]
    OR?: productsWhereInput[]
    NOT?: productsWhereInput | productsWhereInput[]
    product_id?: IntFilter<"products"> | number
    store_id?: IntFilter<"products"> | number
    product_name?: StringFilter<"products"> | string
    product_url?: StringFilter<"products"> | string
    is_active?: BoolNullableFilter<"products"> | boolean | null
    created_at?: DateTimeNullableFilter<"products"> | Date | string | null
    image_urls?: StringNullableListFilter<"products">
    latest_price?: IntNullableFilter<"products"> | number | null
    categories?: StringNullableFilter<"products"> | string | null
    product_prices?: Product_pricesListRelationFilter
    stores?: XOR<StoresScalarRelationFilter, storesWhereInput>
  }

  export type productsOrderByWithRelationInput = {
    product_id?: SortOrder
    store_id?: SortOrder
    product_name?: SortOrder
    product_url?: SortOrder
    is_active?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    image_urls?: SortOrder
    latest_price?: SortOrderInput | SortOrder
    categories?: SortOrderInput | SortOrder
    product_prices?: product_pricesOrderByRelationAggregateInput
    stores?: storesOrderByWithRelationInput
  }

  export type productsWhereUniqueInput = Prisma.AtLeast<{
    product_id?: number
    product_url?: string
    AND?: productsWhereInput | productsWhereInput[]
    OR?: productsWhereInput[]
    NOT?: productsWhereInput | productsWhereInput[]
    store_id?: IntFilter<"products"> | number
    product_name?: StringFilter<"products"> | string
    is_active?: BoolNullableFilter<"products"> | boolean | null
    created_at?: DateTimeNullableFilter<"products"> | Date | string | null
    image_urls?: StringNullableListFilter<"products">
    latest_price?: IntNullableFilter<"products"> | number | null
    categories?: StringNullableFilter<"products"> | string | null
    product_prices?: Product_pricesListRelationFilter
    stores?: XOR<StoresScalarRelationFilter, storesWhereInput>
  }, "product_id" | "product_url">

  export type productsOrderByWithAggregationInput = {
    product_id?: SortOrder
    store_id?: SortOrder
    product_name?: SortOrder
    product_url?: SortOrder
    is_active?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    image_urls?: SortOrder
    latest_price?: SortOrderInput | SortOrder
    categories?: SortOrderInput | SortOrder
    _count?: productsCountOrderByAggregateInput
    _avg?: productsAvgOrderByAggregateInput
    _max?: productsMaxOrderByAggregateInput
    _min?: productsMinOrderByAggregateInput
    _sum?: productsSumOrderByAggregateInput
  }

  export type productsScalarWhereWithAggregatesInput = {
    AND?: productsScalarWhereWithAggregatesInput | productsScalarWhereWithAggregatesInput[]
    OR?: productsScalarWhereWithAggregatesInput[]
    NOT?: productsScalarWhereWithAggregatesInput | productsScalarWhereWithAggregatesInput[]
    product_id?: IntWithAggregatesFilter<"products"> | number
    store_id?: IntWithAggregatesFilter<"products"> | number
    product_name?: StringWithAggregatesFilter<"products"> | string
    product_url?: StringWithAggregatesFilter<"products"> | string
    is_active?: BoolNullableWithAggregatesFilter<"products"> | boolean | null
    created_at?: DateTimeNullableWithAggregatesFilter<"products"> | Date | string | null
    image_urls?: StringNullableListFilter<"products">
    latest_price?: IntNullableWithAggregatesFilter<"products"> | number | null
    categories?: StringNullableWithAggregatesFilter<"products"> | string | null
  }

  export type shahzar_tableWhereInput = {
    AND?: shahzar_tableWhereInput | shahzar_tableWhereInput[]
    OR?: shahzar_tableWhereInput[]
    NOT?: shahzar_tableWhereInput | shahzar_tableWhereInput[]
    id?: IntFilter<"shahzar_table"> | number
    name?: StringFilter<"shahzar_table"> | string
    price?: DecimalFilter<"shahzar_table"> | Decimal | DecimalJsLike | number | string
    image?: StringFilter<"shahzar_table"> | string
    url?: StringFilter<"shahzar_table"> | string
    store?: StringFilter<"shahzar_table"> | string
  }

  export type shahzar_tableOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    image?: SortOrder
    url?: SortOrder
    store?: SortOrder
  }

  export type shahzar_tableWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: shahzar_tableWhereInput | shahzar_tableWhereInput[]
    OR?: shahzar_tableWhereInput[]
    NOT?: shahzar_tableWhereInput | shahzar_tableWhereInput[]
    name?: StringFilter<"shahzar_table"> | string
    price?: DecimalFilter<"shahzar_table"> | Decimal | DecimalJsLike | number | string
    image?: StringFilter<"shahzar_table"> | string
    url?: StringFilter<"shahzar_table"> | string
    store?: StringFilter<"shahzar_table"> | string
  }, "id">

  export type shahzar_tableOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    image?: SortOrder
    url?: SortOrder
    store?: SortOrder
    _count?: shahzar_tableCountOrderByAggregateInput
    _avg?: shahzar_tableAvgOrderByAggregateInput
    _max?: shahzar_tableMaxOrderByAggregateInput
    _min?: shahzar_tableMinOrderByAggregateInput
    _sum?: shahzar_tableSumOrderByAggregateInput
  }

  export type shahzar_tableScalarWhereWithAggregatesInput = {
    AND?: shahzar_tableScalarWhereWithAggregatesInput | shahzar_tableScalarWhereWithAggregatesInput[]
    OR?: shahzar_tableScalarWhereWithAggregatesInput[]
    NOT?: shahzar_tableScalarWhereWithAggregatesInput | shahzar_tableScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"shahzar_table"> | number
    name?: StringWithAggregatesFilter<"shahzar_table"> | string
    price?: DecimalWithAggregatesFilter<"shahzar_table"> | Decimal | DecimalJsLike | number | string
    image?: StringWithAggregatesFilter<"shahzar_table"> | string
    url?: StringWithAggregatesFilter<"shahzar_table"> | string
    store?: StringWithAggregatesFilter<"shahzar_table"> | string
  }

  export type spider_logsWhereInput = {
    AND?: spider_logsWhereInput | spider_logsWhereInput[]
    OR?: spider_logsWhereInput[]
    NOT?: spider_logsWhereInput | spider_logsWhereInput[]
    id?: IntFilter<"spider_logs"> | number
    scraper_id?: IntFilter<"spider_logs"> | number
    scraper_name?: StringFilter<"spider_logs"> | string
    celery_trigger_time?: DateTimeFilter<"spider_logs"> | Date | string
    actual_start_time?: DateTimeFilter<"spider_logs"> | Date | string
    end_time?: DateTimeNullableFilter<"spider_logs"> | Date | string | null
    duration_seconds?: IntNullableFilter<"spider_logs"> | number | null
    retries?: IntNullableFilter<"spider_logs"> | number | null
    result?: StringNullableFilter<"spider_logs"> | string | null
    terminal_notes?: StringNullableFilter<"spider_logs"> | string | null
    listofscrapers?: XOR<ListofscrapersScalarRelationFilter, listofscrapersWhereInput>
  }

  export type spider_logsOrderByWithRelationInput = {
    id?: SortOrder
    scraper_id?: SortOrder
    scraper_name?: SortOrder
    celery_trigger_time?: SortOrder
    actual_start_time?: SortOrder
    end_time?: SortOrderInput | SortOrder
    duration_seconds?: SortOrderInput | SortOrder
    retries?: SortOrderInput | SortOrder
    result?: SortOrderInput | SortOrder
    terminal_notes?: SortOrderInput | SortOrder
    listofscrapers?: listofscrapersOrderByWithRelationInput
  }

  export type spider_logsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: spider_logsWhereInput | spider_logsWhereInput[]
    OR?: spider_logsWhereInput[]
    NOT?: spider_logsWhereInput | spider_logsWhereInput[]
    scraper_id?: IntFilter<"spider_logs"> | number
    scraper_name?: StringFilter<"spider_logs"> | string
    celery_trigger_time?: DateTimeFilter<"spider_logs"> | Date | string
    actual_start_time?: DateTimeFilter<"spider_logs"> | Date | string
    end_time?: DateTimeNullableFilter<"spider_logs"> | Date | string | null
    duration_seconds?: IntNullableFilter<"spider_logs"> | number | null
    retries?: IntNullableFilter<"spider_logs"> | number | null
    result?: StringNullableFilter<"spider_logs"> | string | null
    terminal_notes?: StringNullableFilter<"spider_logs"> | string | null
    listofscrapers?: XOR<ListofscrapersScalarRelationFilter, listofscrapersWhereInput>
  }, "id">

  export type spider_logsOrderByWithAggregationInput = {
    id?: SortOrder
    scraper_id?: SortOrder
    scraper_name?: SortOrder
    celery_trigger_time?: SortOrder
    actual_start_time?: SortOrder
    end_time?: SortOrderInput | SortOrder
    duration_seconds?: SortOrderInput | SortOrder
    retries?: SortOrderInput | SortOrder
    result?: SortOrderInput | SortOrder
    terminal_notes?: SortOrderInput | SortOrder
    _count?: spider_logsCountOrderByAggregateInput
    _avg?: spider_logsAvgOrderByAggregateInput
    _max?: spider_logsMaxOrderByAggregateInput
    _min?: spider_logsMinOrderByAggregateInput
    _sum?: spider_logsSumOrderByAggregateInput
  }

  export type spider_logsScalarWhereWithAggregatesInput = {
    AND?: spider_logsScalarWhereWithAggregatesInput | spider_logsScalarWhereWithAggregatesInput[]
    OR?: spider_logsScalarWhereWithAggregatesInput[]
    NOT?: spider_logsScalarWhereWithAggregatesInput | spider_logsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"spider_logs"> | number
    scraper_id?: IntWithAggregatesFilter<"spider_logs"> | number
    scraper_name?: StringWithAggregatesFilter<"spider_logs"> | string
    celery_trigger_time?: DateTimeWithAggregatesFilter<"spider_logs"> | Date | string
    actual_start_time?: DateTimeWithAggregatesFilter<"spider_logs"> | Date | string
    end_time?: DateTimeNullableWithAggregatesFilter<"spider_logs"> | Date | string | null
    duration_seconds?: IntNullableWithAggregatesFilter<"spider_logs"> | number | null
    retries?: IntNullableWithAggregatesFilter<"spider_logs"> | number | null
    result?: StringNullableWithAggregatesFilter<"spider_logs"> | string | null
    terminal_notes?: StringNullableWithAggregatesFilter<"spider_logs"> | string | null
  }

  export type storesWhereInput = {
    AND?: storesWhereInput | storesWhereInput[]
    OR?: storesWhereInput[]
    NOT?: storesWhereInput | storesWhereInput[]
    store_id?: IntFilter<"stores"> | number
    store_name?: StringFilter<"stores"> | string
    last_retrieved_on?: DateTimeNullableFilter<"stores"> | Date | string | null
    created_at?: DateTimeNullableFilter<"stores"> | Date | string | null
    products?: ProductsListRelationFilter
  }

  export type storesOrderByWithRelationInput = {
    store_id?: SortOrder
    store_name?: SortOrder
    last_retrieved_on?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    products?: productsOrderByRelationAggregateInput
  }

  export type storesWhereUniqueInput = Prisma.AtLeast<{
    store_id?: number
    store_name?: string
    AND?: storesWhereInput | storesWhereInput[]
    OR?: storesWhereInput[]
    NOT?: storesWhereInput | storesWhereInput[]
    last_retrieved_on?: DateTimeNullableFilter<"stores"> | Date | string | null
    created_at?: DateTimeNullableFilter<"stores"> | Date | string | null
    products?: ProductsListRelationFilter
  }, "store_id" | "store_name">

  export type storesOrderByWithAggregationInput = {
    store_id?: SortOrder
    store_name?: SortOrder
    last_retrieved_on?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: storesCountOrderByAggregateInput
    _avg?: storesAvgOrderByAggregateInput
    _max?: storesMaxOrderByAggregateInput
    _min?: storesMinOrderByAggregateInput
    _sum?: storesSumOrderByAggregateInput
  }

  export type storesScalarWhereWithAggregatesInput = {
    AND?: storesScalarWhereWithAggregatesInput | storesScalarWhereWithAggregatesInput[]
    OR?: storesScalarWhereWithAggregatesInput[]
    NOT?: storesScalarWhereWithAggregatesInput | storesScalarWhereWithAggregatesInput[]
    store_id?: IntWithAggregatesFilter<"stores"> | number
    store_name?: StringWithAggregatesFilter<"stores"> | string
    last_retrieved_on?: DateTimeNullableWithAggregatesFilter<"stores"> | Date | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"stores"> | Date | string | null
  }

  export type listofscrapersCreateInput = {
    name: string
    status?: string | null
    created_on?: Date | string
    last_modified?: Date | string | null
    last_ran?: Date | string | null
    spider_logs?: spider_logsCreateNestedManyWithoutListofscrapersInput
  }

  export type listofscrapersUncheckedCreateInput = {
    id?: number
    name: string
    status?: string | null
    created_on?: Date | string
    last_modified?: Date | string | null
    last_ran?: Date | string | null
    spider_logs?: spider_logsUncheckedCreateNestedManyWithoutListofscrapersInput
  }

  export type listofscrapersUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_on?: DateTimeFieldUpdateOperationsInput | Date | string
    last_modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_ran?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    spider_logs?: spider_logsUpdateManyWithoutListofscrapersNestedInput
  }

  export type listofscrapersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_on?: DateTimeFieldUpdateOperationsInput | Date | string
    last_modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_ran?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    spider_logs?: spider_logsUncheckedUpdateManyWithoutListofscrapersNestedInput
  }

  export type listofscrapersCreateManyInput = {
    id?: number
    name: string
    status?: string | null
    created_on?: Date | string
    last_modified?: Date | string | null
    last_ran?: Date | string | null
  }

  export type listofscrapersUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_on?: DateTimeFieldUpdateOperationsInput | Date | string
    last_modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_ran?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type listofscrapersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_on?: DateTimeFieldUpdateOperationsInput | Date | string
    last_modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_ran?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type product_pricesCreateInput = {
    price: Decimal | DecimalJsLike | number | string
    retrieved_on?: Date | string
    products: productsCreateNestedOneWithoutProduct_pricesInput
  }

  export type product_pricesUncheckedCreateInput = {
    price_id?: number
    product_id: number
    price: Decimal | DecimalJsLike | number | string
    retrieved_on?: Date | string
  }

  export type product_pricesUpdateInput = {
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    retrieved_on?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: productsUpdateOneRequiredWithoutProduct_pricesNestedInput
  }

  export type product_pricesUncheckedUpdateInput = {
    price_id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    retrieved_on?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type product_pricesCreateManyInput = {
    price_id?: number
    product_id: number
    price: Decimal | DecimalJsLike | number | string
    retrieved_on?: Date | string
  }

  export type product_pricesUpdateManyMutationInput = {
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    retrieved_on?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type product_pricesUncheckedUpdateManyInput = {
    price_id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    retrieved_on?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type productsCreateInput = {
    product_name: string
    product_url: string
    is_active?: boolean | null
    created_at?: Date | string | null
    image_urls?: productsCreateimage_urlsInput | string[]
    latest_price?: number | null
    categories?: string | null
    product_prices?: product_pricesCreateNestedManyWithoutProductsInput
    stores: storesCreateNestedOneWithoutProductsInput
  }

  export type productsUncheckedCreateInput = {
    product_id?: number
    store_id: number
    product_name: string
    product_url: string
    is_active?: boolean | null
    created_at?: Date | string | null
    image_urls?: productsCreateimage_urlsInput | string[]
    latest_price?: number | null
    categories?: string | null
    product_prices?: product_pricesUncheckedCreateNestedManyWithoutProductsInput
  }

  export type productsUpdateInput = {
    product_name?: StringFieldUpdateOperationsInput | string
    product_url?: StringFieldUpdateOperationsInput | string
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image_urls?: productsUpdateimage_urlsInput | string[]
    latest_price?: NullableIntFieldUpdateOperationsInput | number | null
    categories?: NullableStringFieldUpdateOperationsInput | string | null
    product_prices?: product_pricesUpdateManyWithoutProductsNestedInput
    stores?: storesUpdateOneRequiredWithoutProductsNestedInput
  }

  export type productsUncheckedUpdateInput = {
    product_id?: IntFieldUpdateOperationsInput | number
    store_id?: IntFieldUpdateOperationsInput | number
    product_name?: StringFieldUpdateOperationsInput | string
    product_url?: StringFieldUpdateOperationsInput | string
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image_urls?: productsUpdateimage_urlsInput | string[]
    latest_price?: NullableIntFieldUpdateOperationsInput | number | null
    categories?: NullableStringFieldUpdateOperationsInput | string | null
    product_prices?: product_pricesUncheckedUpdateManyWithoutProductsNestedInput
  }

  export type productsCreateManyInput = {
    product_id?: number
    store_id: number
    product_name: string
    product_url: string
    is_active?: boolean | null
    created_at?: Date | string | null
    image_urls?: productsCreateimage_urlsInput | string[]
    latest_price?: number | null
    categories?: string | null
  }

  export type productsUpdateManyMutationInput = {
    product_name?: StringFieldUpdateOperationsInput | string
    product_url?: StringFieldUpdateOperationsInput | string
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image_urls?: productsUpdateimage_urlsInput | string[]
    latest_price?: NullableIntFieldUpdateOperationsInput | number | null
    categories?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type productsUncheckedUpdateManyInput = {
    product_id?: IntFieldUpdateOperationsInput | number
    store_id?: IntFieldUpdateOperationsInput | number
    product_name?: StringFieldUpdateOperationsInput | string
    product_url?: StringFieldUpdateOperationsInput | string
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image_urls?: productsUpdateimage_urlsInput | string[]
    latest_price?: NullableIntFieldUpdateOperationsInput | number | null
    categories?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type shahzar_tableCreateInput = {
    name: string
    price: Decimal | DecimalJsLike | number | string
    image: string
    url: string
    store: string
  }

  export type shahzar_tableUncheckedCreateInput = {
    id?: number
    name: string
    price: Decimal | DecimalJsLike | number | string
    image: string
    url: string
    store: string
  }

  export type shahzar_tableUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    image?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    store?: StringFieldUpdateOperationsInput | string
  }

  export type shahzar_tableUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    image?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    store?: StringFieldUpdateOperationsInput | string
  }

  export type shahzar_tableCreateManyInput = {
    id?: number
    name: string
    price: Decimal | DecimalJsLike | number | string
    image: string
    url: string
    store: string
  }

  export type shahzar_tableUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    image?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    store?: StringFieldUpdateOperationsInput | string
  }

  export type shahzar_tableUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    image?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    store?: StringFieldUpdateOperationsInput | string
  }

  export type spider_logsCreateInput = {
    scraper_name: string
    celery_trigger_time: Date | string
    actual_start_time: Date | string
    end_time?: Date | string | null
    duration_seconds?: number | null
    retries?: number | null
    result?: string | null
    terminal_notes?: string | null
    listofscrapers: listofscrapersCreateNestedOneWithoutSpider_logsInput
  }

  export type spider_logsUncheckedCreateInput = {
    id?: number
    scraper_id: number
    scraper_name: string
    celery_trigger_time: Date | string
    actual_start_time: Date | string
    end_time?: Date | string | null
    duration_seconds?: number | null
    retries?: number | null
    result?: string | null
    terminal_notes?: string | null
  }

  export type spider_logsUpdateInput = {
    scraper_name?: StringFieldUpdateOperationsInput | string
    celery_trigger_time?: DateTimeFieldUpdateOperationsInput | Date | string
    actual_start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duration_seconds?: NullableIntFieldUpdateOperationsInput | number | null
    retries?: NullableIntFieldUpdateOperationsInput | number | null
    result?: NullableStringFieldUpdateOperationsInput | string | null
    terminal_notes?: NullableStringFieldUpdateOperationsInput | string | null
    listofscrapers?: listofscrapersUpdateOneRequiredWithoutSpider_logsNestedInput
  }

  export type spider_logsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    scraper_id?: IntFieldUpdateOperationsInput | number
    scraper_name?: StringFieldUpdateOperationsInput | string
    celery_trigger_time?: DateTimeFieldUpdateOperationsInput | Date | string
    actual_start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duration_seconds?: NullableIntFieldUpdateOperationsInput | number | null
    retries?: NullableIntFieldUpdateOperationsInput | number | null
    result?: NullableStringFieldUpdateOperationsInput | string | null
    terminal_notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type spider_logsCreateManyInput = {
    id?: number
    scraper_id: number
    scraper_name: string
    celery_trigger_time: Date | string
    actual_start_time: Date | string
    end_time?: Date | string | null
    duration_seconds?: number | null
    retries?: number | null
    result?: string | null
    terminal_notes?: string | null
  }

  export type spider_logsUpdateManyMutationInput = {
    scraper_name?: StringFieldUpdateOperationsInput | string
    celery_trigger_time?: DateTimeFieldUpdateOperationsInput | Date | string
    actual_start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duration_seconds?: NullableIntFieldUpdateOperationsInput | number | null
    retries?: NullableIntFieldUpdateOperationsInput | number | null
    result?: NullableStringFieldUpdateOperationsInput | string | null
    terminal_notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type spider_logsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    scraper_id?: IntFieldUpdateOperationsInput | number
    scraper_name?: StringFieldUpdateOperationsInput | string
    celery_trigger_time?: DateTimeFieldUpdateOperationsInput | Date | string
    actual_start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duration_seconds?: NullableIntFieldUpdateOperationsInput | number | null
    retries?: NullableIntFieldUpdateOperationsInput | number | null
    result?: NullableStringFieldUpdateOperationsInput | string | null
    terminal_notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type storesCreateInput = {
    store_name: string
    last_retrieved_on?: Date | string | null
    created_at?: Date | string | null
    products?: productsCreateNestedManyWithoutStoresInput
  }

  export type storesUncheckedCreateInput = {
    store_id?: number
    store_name: string
    last_retrieved_on?: Date | string | null
    created_at?: Date | string | null
    products?: productsUncheckedCreateNestedManyWithoutStoresInput
  }

  export type storesUpdateInput = {
    store_name?: StringFieldUpdateOperationsInput | string
    last_retrieved_on?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    products?: productsUpdateManyWithoutStoresNestedInput
  }

  export type storesUncheckedUpdateInput = {
    store_id?: IntFieldUpdateOperationsInput | number
    store_name?: StringFieldUpdateOperationsInput | string
    last_retrieved_on?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    products?: productsUncheckedUpdateManyWithoutStoresNestedInput
  }

  export type storesCreateManyInput = {
    store_id?: number
    store_name: string
    last_retrieved_on?: Date | string | null
    created_at?: Date | string | null
  }

  export type storesUpdateManyMutationInput = {
    store_name?: StringFieldUpdateOperationsInput | string
    last_retrieved_on?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type storesUncheckedUpdateManyInput = {
    store_id?: IntFieldUpdateOperationsInput | number
    store_name?: StringFieldUpdateOperationsInput | string
    last_retrieved_on?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type Spider_logsListRelationFilter = {
    every?: spider_logsWhereInput
    some?: spider_logsWhereInput
    none?: spider_logsWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type spider_logsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type listofscrapersCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    status?: SortOrder
    created_on?: SortOrder
    last_modified?: SortOrder
    last_ran?: SortOrder
  }

  export type listofscrapersAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type listofscrapersMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    status?: SortOrder
    created_on?: SortOrder
    last_modified?: SortOrder
    last_ran?: SortOrder
  }

  export type listofscrapersMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    status?: SortOrder
    created_on?: SortOrder
    last_modified?: SortOrder
    last_ran?: SortOrder
  }

  export type listofscrapersSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type ProductsScalarRelationFilter = {
    is?: productsWhereInput
    isNot?: productsWhereInput
  }

  export type product_pricesCountOrderByAggregateInput = {
    price_id?: SortOrder
    product_id?: SortOrder
    price?: SortOrder
    retrieved_on?: SortOrder
  }

  export type product_pricesAvgOrderByAggregateInput = {
    price_id?: SortOrder
    product_id?: SortOrder
    price?: SortOrder
  }

  export type product_pricesMaxOrderByAggregateInput = {
    price_id?: SortOrder
    product_id?: SortOrder
    price?: SortOrder
    retrieved_on?: SortOrder
  }

  export type product_pricesMinOrderByAggregateInput = {
    price_id?: SortOrder
    product_id?: SortOrder
    price?: SortOrder
    retrieved_on?: SortOrder
  }

  export type product_pricesSumOrderByAggregateInput = {
    price_id?: SortOrder
    product_id?: SortOrder
    price?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type Product_pricesListRelationFilter = {
    every?: product_pricesWhereInput
    some?: product_pricesWhereInput
    none?: product_pricesWhereInput
  }

  export type StoresScalarRelationFilter = {
    is?: storesWhereInput
    isNot?: storesWhereInput
  }

  export type product_pricesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type productsCountOrderByAggregateInput = {
    product_id?: SortOrder
    store_id?: SortOrder
    product_name?: SortOrder
    product_url?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    image_urls?: SortOrder
    latest_price?: SortOrder
    categories?: SortOrder
  }

  export type productsAvgOrderByAggregateInput = {
    product_id?: SortOrder
    store_id?: SortOrder
    latest_price?: SortOrder
  }

  export type productsMaxOrderByAggregateInput = {
    product_id?: SortOrder
    store_id?: SortOrder
    product_name?: SortOrder
    product_url?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    latest_price?: SortOrder
    categories?: SortOrder
  }

  export type productsMinOrderByAggregateInput = {
    product_id?: SortOrder
    store_id?: SortOrder
    product_name?: SortOrder
    product_url?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    latest_price?: SortOrder
    categories?: SortOrder
  }

  export type productsSumOrderByAggregateInput = {
    product_id?: SortOrder
    store_id?: SortOrder
    latest_price?: SortOrder
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type shahzar_tableCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    image?: SortOrder
    url?: SortOrder
    store?: SortOrder
  }

  export type shahzar_tableAvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
  }

  export type shahzar_tableMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    image?: SortOrder
    url?: SortOrder
    store?: SortOrder
  }

  export type shahzar_tableMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    image?: SortOrder
    url?: SortOrder
    store?: SortOrder
  }

  export type shahzar_tableSumOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
  }

  export type ListofscrapersScalarRelationFilter = {
    is?: listofscrapersWhereInput
    isNot?: listofscrapersWhereInput
  }

  export type spider_logsCountOrderByAggregateInput = {
    id?: SortOrder
    scraper_id?: SortOrder
    scraper_name?: SortOrder
    celery_trigger_time?: SortOrder
    actual_start_time?: SortOrder
    end_time?: SortOrder
    duration_seconds?: SortOrder
    retries?: SortOrder
    result?: SortOrder
    terminal_notes?: SortOrder
  }

  export type spider_logsAvgOrderByAggregateInput = {
    id?: SortOrder
    scraper_id?: SortOrder
    duration_seconds?: SortOrder
    retries?: SortOrder
  }

  export type spider_logsMaxOrderByAggregateInput = {
    id?: SortOrder
    scraper_id?: SortOrder
    scraper_name?: SortOrder
    celery_trigger_time?: SortOrder
    actual_start_time?: SortOrder
    end_time?: SortOrder
    duration_seconds?: SortOrder
    retries?: SortOrder
    result?: SortOrder
    terminal_notes?: SortOrder
  }

  export type spider_logsMinOrderByAggregateInput = {
    id?: SortOrder
    scraper_id?: SortOrder
    scraper_name?: SortOrder
    celery_trigger_time?: SortOrder
    actual_start_time?: SortOrder
    end_time?: SortOrder
    duration_seconds?: SortOrder
    retries?: SortOrder
    result?: SortOrder
    terminal_notes?: SortOrder
  }

  export type spider_logsSumOrderByAggregateInput = {
    id?: SortOrder
    scraper_id?: SortOrder
    duration_seconds?: SortOrder
    retries?: SortOrder
  }

  export type ProductsListRelationFilter = {
    every?: productsWhereInput
    some?: productsWhereInput
    none?: productsWhereInput
  }

  export type productsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type storesCountOrderByAggregateInput = {
    store_id?: SortOrder
    store_name?: SortOrder
    last_retrieved_on?: SortOrder
    created_at?: SortOrder
  }

  export type storesAvgOrderByAggregateInput = {
    store_id?: SortOrder
  }

  export type storesMaxOrderByAggregateInput = {
    store_id?: SortOrder
    store_name?: SortOrder
    last_retrieved_on?: SortOrder
    created_at?: SortOrder
  }

  export type storesMinOrderByAggregateInput = {
    store_id?: SortOrder
    store_name?: SortOrder
    last_retrieved_on?: SortOrder
    created_at?: SortOrder
  }

  export type storesSumOrderByAggregateInput = {
    store_id?: SortOrder
  }

  export type spider_logsCreateNestedManyWithoutListofscrapersInput = {
    create?: XOR<spider_logsCreateWithoutListofscrapersInput, spider_logsUncheckedCreateWithoutListofscrapersInput> | spider_logsCreateWithoutListofscrapersInput[] | spider_logsUncheckedCreateWithoutListofscrapersInput[]
    connectOrCreate?: spider_logsCreateOrConnectWithoutListofscrapersInput | spider_logsCreateOrConnectWithoutListofscrapersInput[]
    createMany?: spider_logsCreateManyListofscrapersInputEnvelope
    connect?: spider_logsWhereUniqueInput | spider_logsWhereUniqueInput[]
  }

  export type spider_logsUncheckedCreateNestedManyWithoutListofscrapersInput = {
    create?: XOR<spider_logsCreateWithoutListofscrapersInput, spider_logsUncheckedCreateWithoutListofscrapersInput> | spider_logsCreateWithoutListofscrapersInput[] | spider_logsUncheckedCreateWithoutListofscrapersInput[]
    connectOrCreate?: spider_logsCreateOrConnectWithoutListofscrapersInput | spider_logsCreateOrConnectWithoutListofscrapersInput[]
    createMany?: spider_logsCreateManyListofscrapersInputEnvelope
    connect?: spider_logsWhereUniqueInput | spider_logsWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type spider_logsUpdateManyWithoutListofscrapersNestedInput = {
    create?: XOR<spider_logsCreateWithoutListofscrapersInput, spider_logsUncheckedCreateWithoutListofscrapersInput> | spider_logsCreateWithoutListofscrapersInput[] | spider_logsUncheckedCreateWithoutListofscrapersInput[]
    connectOrCreate?: spider_logsCreateOrConnectWithoutListofscrapersInput | spider_logsCreateOrConnectWithoutListofscrapersInput[]
    upsert?: spider_logsUpsertWithWhereUniqueWithoutListofscrapersInput | spider_logsUpsertWithWhereUniqueWithoutListofscrapersInput[]
    createMany?: spider_logsCreateManyListofscrapersInputEnvelope
    set?: spider_logsWhereUniqueInput | spider_logsWhereUniqueInput[]
    disconnect?: spider_logsWhereUniqueInput | spider_logsWhereUniqueInput[]
    delete?: spider_logsWhereUniqueInput | spider_logsWhereUniqueInput[]
    connect?: spider_logsWhereUniqueInput | spider_logsWhereUniqueInput[]
    update?: spider_logsUpdateWithWhereUniqueWithoutListofscrapersInput | spider_logsUpdateWithWhereUniqueWithoutListofscrapersInput[]
    updateMany?: spider_logsUpdateManyWithWhereWithoutListofscrapersInput | spider_logsUpdateManyWithWhereWithoutListofscrapersInput[]
    deleteMany?: spider_logsScalarWhereInput | spider_logsScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type spider_logsUncheckedUpdateManyWithoutListofscrapersNestedInput = {
    create?: XOR<spider_logsCreateWithoutListofscrapersInput, spider_logsUncheckedCreateWithoutListofscrapersInput> | spider_logsCreateWithoutListofscrapersInput[] | spider_logsUncheckedCreateWithoutListofscrapersInput[]
    connectOrCreate?: spider_logsCreateOrConnectWithoutListofscrapersInput | spider_logsCreateOrConnectWithoutListofscrapersInput[]
    upsert?: spider_logsUpsertWithWhereUniqueWithoutListofscrapersInput | spider_logsUpsertWithWhereUniqueWithoutListofscrapersInput[]
    createMany?: spider_logsCreateManyListofscrapersInputEnvelope
    set?: spider_logsWhereUniqueInput | spider_logsWhereUniqueInput[]
    disconnect?: spider_logsWhereUniqueInput | spider_logsWhereUniqueInput[]
    delete?: spider_logsWhereUniqueInput | spider_logsWhereUniqueInput[]
    connect?: spider_logsWhereUniqueInput | spider_logsWhereUniqueInput[]
    update?: spider_logsUpdateWithWhereUniqueWithoutListofscrapersInput | spider_logsUpdateWithWhereUniqueWithoutListofscrapersInput[]
    updateMany?: spider_logsUpdateManyWithWhereWithoutListofscrapersInput | spider_logsUpdateManyWithWhereWithoutListofscrapersInput[]
    deleteMany?: spider_logsScalarWhereInput | spider_logsScalarWhereInput[]
  }

  export type productsCreateNestedOneWithoutProduct_pricesInput = {
    create?: XOR<productsCreateWithoutProduct_pricesInput, productsUncheckedCreateWithoutProduct_pricesInput>
    connectOrCreate?: productsCreateOrConnectWithoutProduct_pricesInput
    connect?: productsWhereUniqueInput
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type productsUpdateOneRequiredWithoutProduct_pricesNestedInput = {
    create?: XOR<productsCreateWithoutProduct_pricesInput, productsUncheckedCreateWithoutProduct_pricesInput>
    connectOrCreate?: productsCreateOrConnectWithoutProduct_pricesInput
    upsert?: productsUpsertWithoutProduct_pricesInput
    connect?: productsWhereUniqueInput
    update?: XOR<XOR<productsUpdateToOneWithWhereWithoutProduct_pricesInput, productsUpdateWithoutProduct_pricesInput>, productsUncheckedUpdateWithoutProduct_pricesInput>
  }

  export type productsCreateimage_urlsInput = {
    set: string[]
  }

  export type product_pricesCreateNestedManyWithoutProductsInput = {
    create?: XOR<product_pricesCreateWithoutProductsInput, product_pricesUncheckedCreateWithoutProductsInput> | product_pricesCreateWithoutProductsInput[] | product_pricesUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: product_pricesCreateOrConnectWithoutProductsInput | product_pricesCreateOrConnectWithoutProductsInput[]
    createMany?: product_pricesCreateManyProductsInputEnvelope
    connect?: product_pricesWhereUniqueInput | product_pricesWhereUniqueInput[]
  }

  export type storesCreateNestedOneWithoutProductsInput = {
    create?: XOR<storesCreateWithoutProductsInput, storesUncheckedCreateWithoutProductsInput>
    connectOrCreate?: storesCreateOrConnectWithoutProductsInput
    connect?: storesWhereUniqueInput
  }

  export type product_pricesUncheckedCreateNestedManyWithoutProductsInput = {
    create?: XOR<product_pricesCreateWithoutProductsInput, product_pricesUncheckedCreateWithoutProductsInput> | product_pricesCreateWithoutProductsInput[] | product_pricesUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: product_pricesCreateOrConnectWithoutProductsInput | product_pricesCreateOrConnectWithoutProductsInput[]
    createMany?: product_pricesCreateManyProductsInputEnvelope
    connect?: product_pricesWhereUniqueInput | product_pricesWhereUniqueInput[]
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type productsUpdateimage_urlsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type product_pricesUpdateManyWithoutProductsNestedInput = {
    create?: XOR<product_pricesCreateWithoutProductsInput, product_pricesUncheckedCreateWithoutProductsInput> | product_pricesCreateWithoutProductsInput[] | product_pricesUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: product_pricesCreateOrConnectWithoutProductsInput | product_pricesCreateOrConnectWithoutProductsInput[]
    upsert?: product_pricesUpsertWithWhereUniqueWithoutProductsInput | product_pricesUpsertWithWhereUniqueWithoutProductsInput[]
    createMany?: product_pricesCreateManyProductsInputEnvelope
    set?: product_pricesWhereUniqueInput | product_pricesWhereUniqueInput[]
    disconnect?: product_pricesWhereUniqueInput | product_pricesWhereUniqueInput[]
    delete?: product_pricesWhereUniqueInput | product_pricesWhereUniqueInput[]
    connect?: product_pricesWhereUniqueInput | product_pricesWhereUniqueInput[]
    update?: product_pricesUpdateWithWhereUniqueWithoutProductsInput | product_pricesUpdateWithWhereUniqueWithoutProductsInput[]
    updateMany?: product_pricesUpdateManyWithWhereWithoutProductsInput | product_pricesUpdateManyWithWhereWithoutProductsInput[]
    deleteMany?: product_pricesScalarWhereInput | product_pricesScalarWhereInput[]
  }

  export type storesUpdateOneRequiredWithoutProductsNestedInput = {
    create?: XOR<storesCreateWithoutProductsInput, storesUncheckedCreateWithoutProductsInput>
    connectOrCreate?: storesCreateOrConnectWithoutProductsInput
    upsert?: storesUpsertWithoutProductsInput
    connect?: storesWhereUniqueInput
    update?: XOR<XOR<storesUpdateToOneWithWhereWithoutProductsInput, storesUpdateWithoutProductsInput>, storesUncheckedUpdateWithoutProductsInput>
  }

  export type product_pricesUncheckedUpdateManyWithoutProductsNestedInput = {
    create?: XOR<product_pricesCreateWithoutProductsInput, product_pricesUncheckedCreateWithoutProductsInput> | product_pricesCreateWithoutProductsInput[] | product_pricesUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: product_pricesCreateOrConnectWithoutProductsInput | product_pricesCreateOrConnectWithoutProductsInput[]
    upsert?: product_pricesUpsertWithWhereUniqueWithoutProductsInput | product_pricesUpsertWithWhereUniqueWithoutProductsInput[]
    createMany?: product_pricesCreateManyProductsInputEnvelope
    set?: product_pricesWhereUniqueInput | product_pricesWhereUniqueInput[]
    disconnect?: product_pricesWhereUniqueInput | product_pricesWhereUniqueInput[]
    delete?: product_pricesWhereUniqueInput | product_pricesWhereUniqueInput[]
    connect?: product_pricesWhereUniqueInput | product_pricesWhereUniqueInput[]
    update?: product_pricesUpdateWithWhereUniqueWithoutProductsInput | product_pricesUpdateWithWhereUniqueWithoutProductsInput[]
    updateMany?: product_pricesUpdateManyWithWhereWithoutProductsInput | product_pricesUpdateManyWithWhereWithoutProductsInput[]
    deleteMany?: product_pricesScalarWhereInput | product_pricesScalarWhereInput[]
  }

  export type listofscrapersCreateNestedOneWithoutSpider_logsInput = {
    create?: XOR<listofscrapersCreateWithoutSpider_logsInput, listofscrapersUncheckedCreateWithoutSpider_logsInput>
    connectOrCreate?: listofscrapersCreateOrConnectWithoutSpider_logsInput
    connect?: listofscrapersWhereUniqueInput
  }

  export type listofscrapersUpdateOneRequiredWithoutSpider_logsNestedInput = {
    create?: XOR<listofscrapersCreateWithoutSpider_logsInput, listofscrapersUncheckedCreateWithoutSpider_logsInput>
    connectOrCreate?: listofscrapersCreateOrConnectWithoutSpider_logsInput
    upsert?: listofscrapersUpsertWithoutSpider_logsInput
    connect?: listofscrapersWhereUniqueInput
    update?: XOR<XOR<listofscrapersUpdateToOneWithWhereWithoutSpider_logsInput, listofscrapersUpdateWithoutSpider_logsInput>, listofscrapersUncheckedUpdateWithoutSpider_logsInput>
  }

  export type productsCreateNestedManyWithoutStoresInput = {
    create?: XOR<productsCreateWithoutStoresInput, productsUncheckedCreateWithoutStoresInput> | productsCreateWithoutStoresInput[] | productsUncheckedCreateWithoutStoresInput[]
    connectOrCreate?: productsCreateOrConnectWithoutStoresInput | productsCreateOrConnectWithoutStoresInput[]
    createMany?: productsCreateManyStoresInputEnvelope
    connect?: productsWhereUniqueInput | productsWhereUniqueInput[]
  }

  export type productsUncheckedCreateNestedManyWithoutStoresInput = {
    create?: XOR<productsCreateWithoutStoresInput, productsUncheckedCreateWithoutStoresInput> | productsCreateWithoutStoresInput[] | productsUncheckedCreateWithoutStoresInput[]
    connectOrCreate?: productsCreateOrConnectWithoutStoresInput | productsCreateOrConnectWithoutStoresInput[]
    createMany?: productsCreateManyStoresInputEnvelope
    connect?: productsWhereUniqueInput | productsWhereUniqueInput[]
  }

  export type productsUpdateManyWithoutStoresNestedInput = {
    create?: XOR<productsCreateWithoutStoresInput, productsUncheckedCreateWithoutStoresInput> | productsCreateWithoutStoresInput[] | productsUncheckedCreateWithoutStoresInput[]
    connectOrCreate?: productsCreateOrConnectWithoutStoresInput | productsCreateOrConnectWithoutStoresInput[]
    upsert?: productsUpsertWithWhereUniqueWithoutStoresInput | productsUpsertWithWhereUniqueWithoutStoresInput[]
    createMany?: productsCreateManyStoresInputEnvelope
    set?: productsWhereUniqueInput | productsWhereUniqueInput[]
    disconnect?: productsWhereUniqueInput | productsWhereUniqueInput[]
    delete?: productsWhereUniqueInput | productsWhereUniqueInput[]
    connect?: productsWhereUniqueInput | productsWhereUniqueInput[]
    update?: productsUpdateWithWhereUniqueWithoutStoresInput | productsUpdateWithWhereUniqueWithoutStoresInput[]
    updateMany?: productsUpdateManyWithWhereWithoutStoresInput | productsUpdateManyWithWhereWithoutStoresInput[]
    deleteMany?: productsScalarWhereInput | productsScalarWhereInput[]
  }

  export type productsUncheckedUpdateManyWithoutStoresNestedInput = {
    create?: XOR<productsCreateWithoutStoresInput, productsUncheckedCreateWithoutStoresInput> | productsCreateWithoutStoresInput[] | productsUncheckedCreateWithoutStoresInput[]
    connectOrCreate?: productsCreateOrConnectWithoutStoresInput | productsCreateOrConnectWithoutStoresInput[]
    upsert?: productsUpsertWithWhereUniqueWithoutStoresInput | productsUpsertWithWhereUniqueWithoutStoresInput[]
    createMany?: productsCreateManyStoresInputEnvelope
    set?: productsWhereUniqueInput | productsWhereUniqueInput[]
    disconnect?: productsWhereUniqueInput | productsWhereUniqueInput[]
    delete?: productsWhereUniqueInput | productsWhereUniqueInput[]
    connect?: productsWhereUniqueInput | productsWhereUniqueInput[]
    update?: productsUpdateWithWhereUniqueWithoutStoresInput | productsUpdateWithWhereUniqueWithoutStoresInput[]
    updateMany?: productsUpdateManyWithWhereWithoutStoresInput | productsUpdateManyWithWhereWithoutStoresInput[]
    deleteMany?: productsScalarWhereInput | productsScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type spider_logsCreateWithoutListofscrapersInput = {
    scraper_name: string
    celery_trigger_time: Date | string
    actual_start_time: Date | string
    end_time?: Date | string | null
    duration_seconds?: number | null
    retries?: number | null
    result?: string | null
    terminal_notes?: string | null
  }

  export type spider_logsUncheckedCreateWithoutListofscrapersInput = {
    id?: number
    scraper_name: string
    celery_trigger_time: Date | string
    actual_start_time: Date | string
    end_time?: Date | string | null
    duration_seconds?: number | null
    retries?: number | null
    result?: string | null
    terminal_notes?: string | null
  }

  export type spider_logsCreateOrConnectWithoutListofscrapersInput = {
    where: spider_logsWhereUniqueInput
    create: XOR<spider_logsCreateWithoutListofscrapersInput, spider_logsUncheckedCreateWithoutListofscrapersInput>
  }

  export type spider_logsCreateManyListofscrapersInputEnvelope = {
    data: spider_logsCreateManyListofscrapersInput | spider_logsCreateManyListofscrapersInput[]
    skipDuplicates?: boolean
  }

  export type spider_logsUpsertWithWhereUniqueWithoutListofscrapersInput = {
    where: spider_logsWhereUniqueInput
    update: XOR<spider_logsUpdateWithoutListofscrapersInput, spider_logsUncheckedUpdateWithoutListofscrapersInput>
    create: XOR<spider_logsCreateWithoutListofscrapersInput, spider_logsUncheckedCreateWithoutListofscrapersInput>
  }

  export type spider_logsUpdateWithWhereUniqueWithoutListofscrapersInput = {
    where: spider_logsWhereUniqueInput
    data: XOR<spider_logsUpdateWithoutListofscrapersInput, spider_logsUncheckedUpdateWithoutListofscrapersInput>
  }

  export type spider_logsUpdateManyWithWhereWithoutListofscrapersInput = {
    where: spider_logsScalarWhereInput
    data: XOR<spider_logsUpdateManyMutationInput, spider_logsUncheckedUpdateManyWithoutListofscrapersInput>
  }

  export type spider_logsScalarWhereInput = {
    AND?: spider_logsScalarWhereInput | spider_logsScalarWhereInput[]
    OR?: spider_logsScalarWhereInput[]
    NOT?: spider_logsScalarWhereInput | spider_logsScalarWhereInput[]
    id?: IntFilter<"spider_logs"> | number
    scraper_id?: IntFilter<"spider_logs"> | number
    scraper_name?: StringFilter<"spider_logs"> | string
    celery_trigger_time?: DateTimeFilter<"spider_logs"> | Date | string
    actual_start_time?: DateTimeFilter<"spider_logs"> | Date | string
    end_time?: DateTimeNullableFilter<"spider_logs"> | Date | string | null
    duration_seconds?: IntNullableFilter<"spider_logs"> | number | null
    retries?: IntNullableFilter<"spider_logs"> | number | null
    result?: StringNullableFilter<"spider_logs"> | string | null
    terminal_notes?: StringNullableFilter<"spider_logs"> | string | null
  }

  export type productsCreateWithoutProduct_pricesInput = {
    product_name: string
    product_url: string
    is_active?: boolean | null
    created_at?: Date | string | null
    image_urls?: productsCreateimage_urlsInput | string[]
    latest_price?: number | null
    categories?: string | null
    stores: storesCreateNestedOneWithoutProductsInput
  }

  export type productsUncheckedCreateWithoutProduct_pricesInput = {
    product_id?: number
    store_id: number
    product_name: string
    product_url: string
    is_active?: boolean | null
    created_at?: Date | string | null
    image_urls?: productsCreateimage_urlsInput | string[]
    latest_price?: number | null
    categories?: string | null
  }

  export type productsCreateOrConnectWithoutProduct_pricesInput = {
    where: productsWhereUniqueInput
    create: XOR<productsCreateWithoutProduct_pricesInput, productsUncheckedCreateWithoutProduct_pricesInput>
  }

  export type productsUpsertWithoutProduct_pricesInput = {
    update: XOR<productsUpdateWithoutProduct_pricesInput, productsUncheckedUpdateWithoutProduct_pricesInput>
    create: XOR<productsCreateWithoutProduct_pricesInput, productsUncheckedCreateWithoutProduct_pricesInput>
    where?: productsWhereInput
  }

  export type productsUpdateToOneWithWhereWithoutProduct_pricesInput = {
    where?: productsWhereInput
    data: XOR<productsUpdateWithoutProduct_pricesInput, productsUncheckedUpdateWithoutProduct_pricesInput>
  }

  export type productsUpdateWithoutProduct_pricesInput = {
    product_name?: StringFieldUpdateOperationsInput | string
    product_url?: StringFieldUpdateOperationsInput | string
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image_urls?: productsUpdateimage_urlsInput | string[]
    latest_price?: NullableIntFieldUpdateOperationsInput | number | null
    categories?: NullableStringFieldUpdateOperationsInput | string | null
    stores?: storesUpdateOneRequiredWithoutProductsNestedInput
  }

  export type productsUncheckedUpdateWithoutProduct_pricesInput = {
    product_id?: IntFieldUpdateOperationsInput | number
    store_id?: IntFieldUpdateOperationsInput | number
    product_name?: StringFieldUpdateOperationsInput | string
    product_url?: StringFieldUpdateOperationsInput | string
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image_urls?: productsUpdateimage_urlsInput | string[]
    latest_price?: NullableIntFieldUpdateOperationsInput | number | null
    categories?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type product_pricesCreateWithoutProductsInput = {
    price: Decimal | DecimalJsLike | number | string
    retrieved_on?: Date | string
  }

  export type product_pricesUncheckedCreateWithoutProductsInput = {
    price_id?: number
    price: Decimal | DecimalJsLike | number | string
    retrieved_on?: Date | string
  }

  export type product_pricesCreateOrConnectWithoutProductsInput = {
    where: product_pricesWhereUniqueInput
    create: XOR<product_pricesCreateWithoutProductsInput, product_pricesUncheckedCreateWithoutProductsInput>
  }

  export type product_pricesCreateManyProductsInputEnvelope = {
    data: product_pricesCreateManyProductsInput | product_pricesCreateManyProductsInput[]
    skipDuplicates?: boolean
  }

  export type storesCreateWithoutProductsInput = {
    store_name: string
    last_retrieved_on?: Date | string | null
    created_at?: Date | string | null
  }

  export type storesUncheckedCreateWithoutProductsInput = {
    store_id?: number
    store_name: string
    last_retrieved_on?: Date | string | null
    created_at?: Date | string | null
  }

  export type storesCreateOrConnectWithoutProductsInput = {
    where: storesWhereUniqueInput
    create: XOR<storesCreateWithoutProductsInput, storesUncheckedCreateWithoutProductsInput>
  }

  export type product_pricesUpsertWithWhereUniqueWithoutProductsInput = {
    where: product_pricesWhereUniqueInput
    update: XOR<product_pricesUpdateWithoutProductsInput, product_pricesUncheckedUpdateWithoutProductsInput>
    create: XOR<product_pricesCreateWithoutProductsInput, product_pricesUncheckedCreateWithoutProductsInput>
  }

  export type product_pricesUpdateWithWhereUniqueWithoutProductsInput = {
    where: product_pricesWhereUniqueInput
    data: XOR<product_pricesUpdateWithoutProductsInput, product_pricesUncheckedUpdateWithoutProductsInput>
  }

  export type product_pricesUpdateManyWithWhereWithoutProductsInput = {
    where: product_pricesScalarWhereInput
    data: XOR<product_pricesUpdateManyMutationInput, product_pricesUncheckedUpdateManyWithoutProductsInput>
  }

  export type product_pricesScalarWhereInput = {
    AND?: product_pricesScalarWhereInput | product_pricesScalarWhereInput[]
    OR?: product_pricesScalarWhereInput[]
    NOT?: product_pricesScalarWhereInput | product_pricesScalarWhereInput[]
    price_id?: IntFilter<"product_prices"> | number
    product_id?: IntFilter<"product_prices"> | number
    price?: DecimalFilter<"product_prices"> | Decimal | DecimalJsLike | number | string
    retrieved_on?: DateTimeFilter<"product_prices"> | Date | string
  }

  export type storesUpsertWithoutProductsInput = {
    update: XOR<storesUpdateWithoutProductsInput, storesUncheckedUpdateWithoutProductsInput>
    create: XOR<storesCreateWithoutProductsInput, storesUncheckedCreateWithoutProductsInput>
    where?: storesWhereInput
  }

  export type storesUpdateToOneWithWhereWithoutProductsInput = {
    where?: storesWhereInput
    data: XOR<storesUpdateWithoutProductsInput, storesUncheckedUpdateWithoutProductsInput>
  }

  export type storesUpdateWithoutProductsInput = {
    store_name?: StringFieldUpdateOperationsInput | string
    last_retrieved_on?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type storesUncheckedUpdateWithoutProductsInput = {
    store_id?: IntFieldUpdateOperationsInput | number
    store_name?: StringFieldUpdateOperationsInput | string
    last_retrieved_on?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type listofscrapersCreateWithoutSpider_logsInput = {
    name: string
    status?: string | null
    created_on?: Date | string
    last_modified?: Date | string | null
    last_ran?: Date | string | null
  }

  export type listofscrapersUncheckedCreateWithoutSpider_logsInput = {
    id?: number
    name: string
    status?: string | null
    created_on?: Date | string
    last_modified?: Date | string | null
    last_ran?: Date | string | null
  }

  export type listofscrapersCreateOrConnectWithoutSpider_logsInput = {
    where: listofscrapersWhereUniqueInput
    create: XOR<listofscrapersCreateWithoutSpider_logsInput, listofscrapersUncheckedCreateWithoutSpider_logsInput>
  }

  export type listofscrapersUpsertWithoutSpider_logsInput = {
    update: XOR<listofscrapersUpdateWithoutSpider_logsInput, listofscrapersUncheckedUpdateWithoutSpider_logsInput>
    create: XOR<listofscrapersCreateWithoutSpider_logsInput, listofscrapersUncheckedCreateWithoutSpider_logsInput>
    where?: listofscrapersWhereInput
  }

  export type listofscrapersUpdateToOneWithWhereWithoutSpider_logsInput = {
    where?: listofscrapersWhereInput
    data: XOR<listofscrapersUpdateWithoutSpider_logsInput, listofscrapersUncheckedUpdateWithoutSpider_logsInput>
  }

  export type listofscrapersUpdateWithoutSpider_logsInput = {
    name?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_on?: DateTimeFieldUpdateOperationsInput | Date | string
    last_modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_ran?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type listofscrapersUncheckedUpdateWithoutSpider_logsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_on?: DateTimeFieldUpdateOperationsInput | Date | string
    last_modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_ran?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type productsCreateWithoutStoresInput = {
    product_name: string
    product_url: string
    is_active?: boolean | null
    created_at?: Date | string | null
    image_urls?: productsCreateimage_urlsInput | string[]
    latest_price?: number | null
    categories?: string | null
    product_prices?: product_pricesCreateNestedManyWithoutProductsInput
  }

  export type productsUncheckedCreateWithoutStoresInput = {
    product_id?: number
    product_name: string
    product_url: string
    is_active?: boolean | null
    created_at?: Date | string | null
    image_urls?: productsCreateimage_urlsInput | string[]
    latest_price?: number | null
    categories?: string | null
    product_prices?: product_pricesUncheckedCreateNestedManyWithoutProductsInput
  }

  export type productsCreateOrConnectWithoutStoresInput = {
    where: productsWhereUniqueInput
    create: XOR<productsCreateWithoutStoresInput, productsUncheckedCreateWithoutStoresInput>
  }

  export type productsCreateManyStoresInputEnvelope = {
    data: productsCreateManyStoresInput | productsCreateManyStoresInput[]
    skipDuplicates?: boolean
  }

  export type productsUpsertWithWhereUniqueWithoutStoresInput = {
    where: productsWhereUniqueInput
    update: XOR<productsUpdateWithoutStoresInput, productsUncheckedUpdateWithoutStoresInput>
    create: XOR<productsCreateWithoutStoresInput, productsUncheckedCreateWithoutStoresInput>
  }

  export type productsUpdateWithWhereUniqueWithoutStoresInput = {
    where: productsWhereUniqueInput
    data: XOR<productsUpdateWithoutStoresInput, productsUncheckedUpdateWithoutStoresInput>
  }

  export type productsUpdateManyWithWhereWithoutStoresInput = {
    where: productsScalarWhereInput
    data: XOR<productsUpdateManyMutationInput, productsUncheckedUpdateManyWithoutStoresInput>
  }

  export type productsScalarWhereInput = {
    AND?: productsScalarWhereInput | productsScalarWhereInput[]
    OR?: productsScalarWhereInput[]
    NOT?: productsScalarWhereInput | productsScalarWhereInput[]
    product_id?: IntFilter<"products"> | number
    store_id?: IntFilter<"products"> | number
    product_name?: StringFilter<"products"> | string
    product_url?: StringFilter<"products"> | string
    is_active?: BoolNullableFilter<"products"> | boolean | null
    created_at?: DateTimeNullableFilter<"products"> | Date | string | null
    image_urls?: StringNullableListFilter<"products">
    latest_price?: IntNullableFilter<"products"> | number | null
    categories?: StringNullableFilter<"products"> | string | null
  }

  export type spider_logsCreateManyListofscrapersInput = {
    id?: number
    scraper_name: string
    celery_trigger_time: Date | string
    actual_start_time: Date | string
    end_time?: Date | string | null
    duration_seconds?: number | null
    retries?: number | null
    result?: string | null
    terminal_notes?: string | null
  }

  export type spider_logsUpdateWithoutListofscrapersInput = {
    scraper_name?: StringFieldUpdateOperationsInput | string
    celery_trigger_time?: DateTimeFieldUpdateOperationsInput | Date | string
    actual_start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duration_seconds?: NullableIntFieldUpdateOperationsInput | number | null
    retries?: NullableIntFieldUpdateOperationsInput | number | null
    result?: NullableStringFieldUpdateOperationsInput | string | null
    terminal_notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type spider_logsUncheckedUpdateWithoutListofscrapersInput = {
    id?: IntFieldUpdateOperationsInput | number
    scraper_name?: StringFieldUpdateOperationsInput | string
    celery_trigger_time?: DateTimeFieldUpdateOperationsInput | Date | string
    actual_start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duration_seconds?: NullableIntFieldUpdateOperationsInput | number | null
    retries?: NullableIntFieldUpdateOperationsInput | number | null
    result?: NullableStringFieldUpdateOperationsInput | string | null
    terminal_notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type spider_logsUncheckedUpdateManyWithoutListofscrapersInput = {
    id?: IntFieldUpdateOperationsInput | number
    scraper_name?: StringFieldUpdateOperationsInput | string
    celery_trigger_time?: DateTimeFieldUpdateOperationsInput | Date | string
    actual_start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duration_seconds?: NullableIntFieldUpdateOperationsInput | number | null
    retries?: NullableIntFieldUpdateOperationsInput | number | null
    result?: NullableStringFieldUpdateOperationsInput | string | null
    terminal_notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type product_pricesCreateManyProductsInput = {
    price_id?: number
    price: Decimal | DecimalJsLike | number | string
    retrieved_on?: Date | string
  }

  export type product_pricesUpdateWithoutProductsInput = {
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    retrieved_on?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type product_pricesUncheckedUpdateWithoutProductsInput = {
    price_id?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    retrieved_on?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type product_pricesUncheckedUpdateManyWithoutProductsInput = {
    price_id?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    retrieved_on?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type productsCreateManyStoresInput = {
    product_id?: number
    product_name: string
    product_url: string
    is_active?: boolean | null
    created_at?: Date | string | null
    image_urls?: productsCreateimage_urlsInput | string[]
    latest_price?: number | null
    categories?: string | null
  }

  export type productsUpdateWithoutStoresInput = {
    product_name?: StringFieldUpdateOperationsInput | string
    product_url?: StringFieldUpdateOperationsInput | string
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image_urls?: productsUpdateimage_urlsInput | string[]
    latest_price?: NullableIntFieldUpdateOperationsInput | number | null
    categories?: NullableStringFieldUpdateOperationsInput | string | null
    product_prices?: product_pricesUpdateManyWithoutProductsNestedInput
  }

  export type productsUncheckedUpdateWithoutStoresInput = {
    product_id?: IntFieldUpdateOperationsInput | number
    product_name?: StringFieldUpdateOperationsInput | string
    product_url?: StringFieldUpdateOperationsInput | string
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image_urls?: productsUpdateimage_urlsInput | string[]
    latest_price?: NullableIntFieldUpdateOperationsInput | number | null
    categories?: NullableStringFieldUpdateOperationsInput | string | null
    product_prices?: product_pricesUncheckedUpdateManyWithoutProductsNestedInput
  }

  export type productsUncheckedUpdateManyWithoutStoresInput = {
    product_id?: IntFieldUpdateOperationsInput | number
    product_name?: StringFieldUpdateOperationsInput | string
    product_url?: StringFieldUpdateOperationsInput | string
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image_urls?: productsUpdateimage_urlsInput | string[]
    latest_price?: NullableIntFieldUpdateOperationsInput | number | null
    categories?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}