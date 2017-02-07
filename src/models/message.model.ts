export class Message {
    id: number;
    profile: string;
    from_first_name: string;
    from_last_name: string;
    from_id: number;
    status: string;
    last_message: string;
    timestamp: string;
    unread: boolean;
    messages: Array<any>;
}