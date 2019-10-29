export class StatusUtils {
    public static convert(status: string): string {
        switch(status) {
            case 'waiting_payment': return 'Aguardando Pagamento';
            case 'canceled': return 'Cancelado';
            case 'in_transit': return 'Em Trânsito';
            case 'completed': return 'Finalizado';
            default: return 'Confirmado';
        }
    }
}