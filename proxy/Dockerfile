FROM nginx

# Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*

# Copy custom configuration file from the current directory
COPY nginx.conf /etc/nginx/nginx.conf

# Expose ports
EXPOSE 80
