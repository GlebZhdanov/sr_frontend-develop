import { RootState } from '../../../../app/provides/config/store';

export const getCabinets = (state: RootState) => state.getCompany?.cabinets;
export const getCampaigns = (state: RootState) => state.getCompany?.campaigns;
export const getMetrics = (state: RootState) => state.getCompany?.metrics;
export const getIsLoading = (state: RootState) => state.getCompany.isLoading;
