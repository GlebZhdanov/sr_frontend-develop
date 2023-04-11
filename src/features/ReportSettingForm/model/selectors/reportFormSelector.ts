import { RootState } from '../../../../app/provides/config/store';

export const getUserCabinets = (state: RootState) => state.postCompany?.cabinets;
export const getUserCampaigns = (state: RootState) => state.postCompany?.campaigns;
export const getUserMetrics = (state: RootState) => state.postCompany?.metrics;
