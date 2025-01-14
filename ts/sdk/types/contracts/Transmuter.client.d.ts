/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.24.0.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/
import { CosmWasmClient, SigningCosmWasmClient, ExecuteResult } from "@cosmjs/cosmwasm-stargate";
import { StdFee } from "@cosmjs/amino";
import { Coin, AdminResponse, PoolResponse } from "./Transmuter.types";
export interface TransmuterReadOnlyInterface {
    contractAddress: string;
    admin: () => Promise<AdminResponse>;
    pool: () => Promise<PoolResponse>;
}
export declare class TransmuterQueryClient implements TransmuterReadOnlyInterface {
    client: CosmWasmClient;
    contractAddress: string;
    constructor(client: CosmWasmClient, contractAddress: string);
    admin: () => Promise<AdminResponse>;
    pool: () => Promise<PoolResponse>;
}
export interface TransmuterInterface extends TransmuterReadOnlyInterface {
    contractAddress: string;
    sender: string;
    supply: (fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    transmute: (fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    updateAdmin: ({ newAdmin }: {
        newAdmin: string;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    withdraw: ({ coins }: {
        coins: Coin[];
    }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
}
export declare class TransmuterClient extends TransmuterQueryClient implements TransmuterInterface {
    client: SigningCosmWasmClient;
    sender: string;
    contractAddress: string;
    constructor(client: SigningCosmWasmClient, sender: string, contractAddress: string);
    supply: (fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    transmute: (fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    updateAdmin: ({ newAdmin }: {
        newAdmin: string;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    withdraw: ({ coins }: {
        coins: Coin[];
    }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
}
//# sourceMappingURL=Transmuter.client.d.ts.map