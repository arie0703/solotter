# solotter
シンプルなアプリ開発を通じてDocker,AWS等のインフラ関連を学ぶ
# command
```bash
# migration
docker-compose run --rm web sh -c "python manage.py makemigrations solotter"
docker-compose run --rm web sh -c "python manage.py migrate"

# コンテナ更新
docker-compose up -d

```