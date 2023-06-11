const admin = require('firebase-admin');
const serviceAccount = require('./fcmtopic-4de00-firebase-adminsdk-bvhdw-44f215875f.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

// 메시지 생성
const message = {
  notification: {
    title: 'FCM 메시지 제목',
    body: '알림 테스트 내용입니다.',
  },
  data: {
    typeDescription: '차량이 배차되었습니다.',

  },
  apns: {
    payload: {
      aps: {
        'mutable-content': 1
      }
    },
    fcm_options: {
      image: 'https://foo.bar.pizza-monster.png'
    }
  },
  topic: 'kimjitae', // 메시지를 보낼 대상 토픽 이름
};

// FCM 메시지 보내기
admin.messaging().send(message)
  .then((response) => {
    console.log('메시지가 성공적으로 보내졌습니다:', response);
  })
  .catch((error) => {
    console.log('메시지 보내기 실패:', error);
  });