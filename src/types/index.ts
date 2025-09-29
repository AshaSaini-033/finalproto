export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  avatar?: string;
  organization?: string;
  location?: string;
  verified: boolean;
  trustScore: number;
  badges: string[];
}

export type UserRole = 'admin' | 'verifier' | 'community' | 'buyer' | 'researcher' | 'company' | 'farmer' | 'ngo';

export interface Project {
  id: string;
  name: string;
  location: string;
  coordinates: [number, number];
  status: 'active' | 'pending' | 'under-review' | 'verified';
  creditsIssued: number;
  creditsAvailable: number;
  price: number;
  projectType: string;
  description: string;
  images: string[];
  verificationBadge: boolean;
  sdgImpacts: string[];
  communityBenefits: number;
  biodiversityScore: number;
  qrCode: string;
  blockchainCert: string;
  trustScore: number;
}

export interface CarbonCredit {
  id: string;
  projectId: string;
  tokenId: string;
  price: number;
  vintage: string;
  quantity: number;
  status: 'available' | 'retired' | 'pending';
  owner: string;
  transactionHash: string;
  certificateUrl: string;
  impactBadges: string[];
}

export interface Transaction {
  id: string;
  type: 'mint' | 'transfer' | 'retire';
  creditId: string;
  from: string;
  to: string;
  amount: number;
  timestamp: Date;
  txHash: string;
  verified: boolean;
}

export interface MRVData {
  id: string;
  projectId: string;
  reportDate: Date;
  reportedSequestration: number;
  verifiedSequestration: number;
  trustScore: number;
  satelliteData?: string;
  droneData?: string[];
  fieldSurveyData?: any;
  aiCalculation: number;
  verifierNotes: string;
  status: 'pending' | 'verified' | 'disputed';
}