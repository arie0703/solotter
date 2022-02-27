# solotter
シンプルなアプリ開発を通じてDocker,AWS等のインフラ関連を学ぶ
# command
```bash
# migration
docker-compose run --rm web sh -c "python manage.py makemigrations solotter"
docker-compose run --rm web sh -c "python manage.py migrate"

# Django コンソール上でadminユーザーの確認

docker-compose run --rm web sh -c "python manage.py shell"
from django.contrib.auth.models import User
User.objects.all()

# コンテナ更新
docker-compose up -d


# React側でのパッケージインストール
docker-compose run --rm react sh -c "npm install xxxx"

```