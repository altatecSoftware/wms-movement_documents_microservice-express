

export class InboundOrderService {
    private _inboundOrderRepository: any

    constructor({ InboundOrderRepository }: any) {
        this._inboundOrderRepository = InboundOrderRepository
    }

    public getAll() {
        console.log('Service')
        this._inboundOrderRepository.getAll()
    }

    public get() {
        console.log('Service')
        this._inboundOrderRepository.get()
    }

    public create() {
        console.log('Service')
        this._inboundOrderRepository.create()
    }

    public update() {
        console.log('Service')
        this._inboundOrderRepository.update()
    }

    public delete() {
        console.log('Service')
        this._inboundOrderRepository.delete()
    }
}