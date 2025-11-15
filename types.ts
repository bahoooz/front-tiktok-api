export type Video = {
  id: number;
  type: string;
  operationId: string;
  done: boolean;
  isPosted: boolean;
  prompt: string;
  uri: string;
  url_link: string;
  createdAt: string;
};

export type Prompt = {
  id: number;
  intro: string;
  place: string;
  habit: string;
  rapSpeed: string;
  animal?: string;
  rapText: string;
  instrumentalFlow: string;
  prompt: string;
  updatedAt: string;
};
