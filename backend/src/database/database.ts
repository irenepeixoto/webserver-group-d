import { createClient } from "@supabase/supabase-js";

export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type Database = {
  graphql_public: {
    Tables: {
      [_ in never]: never;
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      graphql: {
        Args: {
          operationName?: string;
          query?: string;
          variables?: Json;
          extensions?: Json;
        };
        Returns: Json;
      };
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
  public: {
    Tables: {
      responses: {
        Row: {
          created_at: string;
          id: number;
          request_ip: string;
          response_body: Json;
        };
        Insert: {
          created_at?: string;
          id?: number;
          request_ip: string;
          response_body: Json;
        };
        Update: {
          created_at?: string;
          id?: number;
          request_ip?: string;
          response_body?: Json;
        };
        Relationships: [];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
};

const supabaseUrl = process.env.SUPABASE_URL || "erro";
const supabaseKey = process.env.SUPABASE_KEY || "erro";
console.log(supabaseUrl)
console.log(supabaseKey)

const supabase = createClient<Database>(supabaseUrl, supabaseKey);

export default supabase;
