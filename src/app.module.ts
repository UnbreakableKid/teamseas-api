import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';

@Module({
  imports: [
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'], //combine all graphql files in the project
      playground: false, //disable playground
      plugins: [ApolloServerPluginLandingPageLocalDefault()], //enable playground
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
