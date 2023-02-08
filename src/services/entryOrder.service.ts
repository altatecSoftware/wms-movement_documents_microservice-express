

export class EntryOrderService {
    private _entryOrderRepository: any

    constructor({ EntryOrderRepository }: any) {
        this._entryOrderRepository = EntryOrderRepository
    }

    public getAll() {
        console.log('Service')
        this._entryOrderRepository.getAll()
    }

    public get() {
        console.log('Service')
        this._entryOrderRepository.get()
    }

    public create() {
        console.log('Service')
        this._entryOrderRepository.create()
    }

    public update() {
        console.log('Service')
        this._entryOrderRepository.update()
    }

    public delete() {
        console.log('Service')
        this._entryOrderRepository.delete()
    }
}