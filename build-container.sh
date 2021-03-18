# ERROR_FILE = $pwd;
# echo ERROR_FILE
# echo "$pwd";
# function hist() {
# }

echo "$(pwd)"
docker run -it --pid=host -p 3000:3000 -v $(pwd):/usr/src/plugin codotype-plugin-dev

# docker run -it --pid=host -p 3000:3000 --volume ./:/usr/src/plugin codotype-plugin-dev
# docker run -it --pid=host -p 3000:3000 -v './:/usr/src/plugin' -v '/on/my/host/test2:/on/the/container/test2' codotype-plugin-dev