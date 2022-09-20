export type WorkerMessage = {
    method: DocumentAutoMethod
}

export type WorkerResponse = WorkerResponseSuccess | WorkerResponseError

export type WorkerResponseSuccess = {
    method: DocumentAutoMethod
    result: any
}

export type WorkerResponseError = {
    method: DocumentAutoMethod
    error: any
}

export type DocumentAutoMethod = 'edgeValidation' | 'bar'
