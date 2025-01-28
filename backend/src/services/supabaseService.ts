import supabase from "../database/database";

const supabaseService = {
  saveResponse: async (requestIp: string, responseBody: {}) => {
    const createResponse = await supabase
      .from("responses")
      .insert({ request_ip: requestIp, response_body: responseBody });

    return createResponse;
  },
};

export default supabaseService;
