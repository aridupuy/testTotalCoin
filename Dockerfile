FROM php:8.1.0-apache
ARG DEBIAN_FRONTEND=noninteractive
RUN apt-get update \
    && apt-get install -y libzip-dev \
    && apt-get install -y libpq-dev \
    && rm -rf /var/lib/apt/lists/* \
    && docker-php-ext-install pgsql \
    && docker-php-ext-install pdo_pgsql


RUN a2enmod rewrite
