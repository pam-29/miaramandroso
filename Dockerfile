FROM php:8.4-fpm
WORKDIR /var/www
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer
COPY --from=mlocati/php-extension-installer /usr/bin/install-php-extensions /usr/bin/
RUN install-php-extensions pdo_mysql
COPY . .
RUN composer install
CMD ["php", "artisan", "serve", "--host=0.0.0.0", "--port=8000"]