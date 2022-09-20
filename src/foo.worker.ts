import type {
    DocumentAutoMethod,
    WorkerMessage,
    WorkerResponseError,
    WorkerResponseSuccess,
} from './foo'

const operations: Record<DocumentAutoMethod,
    (data: WorkerMessage) => Promise<any>> = {
    edgeValidation: async () => {
        console.log("do edge detection")
    },
    bar: async () => {
    },
}

const sendError = (e: WorkerResponseError): void => {
    postMessage(e)
}

const sendResult = (e: WorkerResponseSuccess): void => {
    postMessage(e)
}


self.onmessage = async (data:MessageEvent) => {
    console.log("worker", data);
    setTimeout(() => {
        postMessage({
            result: 42
        })
    }, 1000)
}

