# PWA 중요사항 정리

- vite 사용시 vite-plugin-pwa 라이브러리로 pwa 기본 틀 제공
- vite.config.js 에 아래와 같은 세팅 값 적용 필요
- 아이콘 이미지 등록 필수, 권장은 192px, 512px 2개 등록
- 해당 사항을 마무리하고 빌드 후, 빌드 된 파일을 배포 후 크롬에서 페이지 저장을 하면 다운로드가 발생하고 네이티브 앱처럼 실행

```js
plugins: [
    vue(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'masked-icon.svg'],
      manifest: {
        name: 'pwa-vue',
        short_name: 'pwa-vue',
        description: 'pwa-vue',
        theme_color: '#ffffff',
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable'
          }
        ]
      }
    })
  ],
```
