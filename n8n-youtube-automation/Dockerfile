# Sử dụng Node.js 22 Alpine chuẩn để chạy n8n v2.x MỚI NHẤT
FROM node:22-alpine

USER root

# Cài đặt FFmpeg, Python3, py3-pip và các công cụ đồ họa
RUN apk add --no-cache \
    ffmpeg \
    python3 \
    py3-pip \
    build-base \
    cairo-dev \
    pango-dev \
    graphicsmagick

# Cài đặt công cụ tạo giọng nói AI Edge-TTS của Microsoft (miễn phí)
RUN pip3 install edge-tts --break-system-packages

# Cài đặt phiên bản n8n MỚI NHẤT (v2.x) qua npm
RUN npm install -g n8n@latest --omit=dev

# Tạo thư mục làm việc và phân quyền cho user node
RUN mkdir -p /home/node/.n8n /data && chown -R node:node /home/node /data

USER node

EXPOSE 5678

CMD ["n8n", "start"]