export type CabinetType = {
  id: number;
  ext_id: number;
  ext_name: string;
}

export type CampaignType = {
  ext_id: number;
  ext_name: string;
  cabinet: number;
}

export type InitialStateType = {
  cabinets: CabinetType[];
  campaigns?: CampaignType[];
  metrics?: Record<string, string>[];
  isLoading?: boolean;
  error?: string;
};

export type TestDataResponseType = {
  cabinets: CabinetType[]
  campaigns: CampaignType[]
  metrics: Record<string, string>[]
}
