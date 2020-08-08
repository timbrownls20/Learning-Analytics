#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

#Depending on the operating system of the host machines(s) that will build or run the containers, the image specified in the FROM statement may need to be changed.
#For more information, please see https://aka.ms/containercompat

FROM mcr.microsoft.com/dotnet/core/sdk:3.1-nanoserver-1903 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/core/sdk:3.1-nanoserver-1903 AS build
WORKDIR /src
COPY ["LearningAnalytics.API/LearningAnalytics.API.csproj", "LearningAnalytics.API/"]
RUN dotnet restore "LearningAnalytics.API/LearningAnalytics.API.csproj"
COPY . .
WORKDIR "/src/LearningAnalytics.API"
RUN dotnet build "LearningAnalytics.API.csproj" -c Release -o /app/build

FROM mcr.microsoft.com/dotnet/core/sdk:3.1-nanoserver-1903 AS migration
WORKDIR /src
#COPY ["LearningAnalytics.Migration/LearningAnalytics.Migration.csproj", "LearningAnalytics.Migration/"]
COPY . .
RUN dotnet restore "LearningAnalytics.Migration/LearningAnalytics.Migration.csproj"
COPY . .
WORKDIR "/src/LearningAnalytics.Migration"
RUN dotnet build "LearningAnalytics.Migration.csproj" -c Release -o /app/migration


FROM build AS publish
RUN dotnet publish "LearningAnalytics.API.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /migration
COPY --from=migration /app/migration .

WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "LearningAnalytics.API.dll"]