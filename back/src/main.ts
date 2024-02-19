import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const port = process.env.PORT || 8080;
  const app = await NestFactory.create(AppModule, { cors: true });

  const documentationConfig = new DocumentBuilder()
    .setTitle('SmartStock API')
    .build();

  const document = SwaggerModule.createDocument(app, documentationConfig);

  SwaggerModule.setup('/api/docs', app, document);

  await app.listen(port, () => {
    console.log(`Server started on port ${port}...`);
  });
}
bootstrap();
