# faststack

FastStack, a retrieval-augmented generation chat app.
Users upload documents, which are turned into vectors and stored in Qdrant.
When they ask a question, I retrieve the most relevant chunks, build a prompt, and send it to a model.
I have two inference modes — a PyTorch baseline and an ONNX INT8 quantized path — and I measure p50/p95 latency and tokens/sec for both.
The frontend streams tokens in real time via SSE, and everything runs in Kubernetes with separate deployments for the frontend, backend, and vector DB.”


<img width="2379" height="1380" alt="image" src="https://github.com/user-attachments/assets/95b740eb-4ecb-4182-9247-e1553f4bb122" />
