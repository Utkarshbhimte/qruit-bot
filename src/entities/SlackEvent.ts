export interface IBlock {
  type: string;
  block_id: string;
  elements: IElement[];
}

export interface IElement {
  type: string;
  block_id?: string;
  elements?: IElement[];
  text: string;
}

export interface ISlackEvent {
  client_msg_id: string;
  type: string;
  text: string;
  user: string;
  ts: string;
  team: string;
  blocks: IBlock[];
  channel: string;
  event_ts: string;
  channel_type: string;
}

export interface ISlackActionEventBody {
  token: string;
  team_id: string;
  api_app_id: string;
  event: ISlackEvent;
  type: string;
  event_id: string;
  event_time: number;
  authed_users: string[];
}
