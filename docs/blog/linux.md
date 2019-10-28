# Linux操作系统介绍
诞生于1991年10月5日，Linux存在许多不同Linux版本，但他们都使用了Linux内核

##  Linux 发行版
简单说就是将Linux内核与应用软件做一个打包，比如： ubuntu/redHat/centeros/Debian/Fedora/stackware....

centeros 是根据redhat的开源代码封装的

ubuntu 在中国是非常流行的界面linux操作系统

## 虚拟机
流行的虚拟机软件 VMware、VirtualBox、VirtualPc(微软)，能再windows系统上虚拟出多个计算机

## 安装ubuntu系统

虚拟机要求：VMware  内存2G、内核：2HZ 、硬盘25G

> 下载地址,有时间上传到网盘后补充

VMware下载地址：

ubuntu系统下载地址：

* 这里在虚拟机安装操作忽略


## Linux 基本操作命令

> 文件操作

```
ls                  //查看当前文件下的列表

ls -l               //查看当前文件下的列表的详细信息

ls -la              //查看当前文件下的所有列表（包括隐藏）的详细信息 在linux中以. 和 .开头的文件是隐藏文件

cd                  //进入指定目录

pwd                 //查看当前文件路径

rm <--文件名字-->    //删除文件

rm -r filename      // 递归删除，删除文件以及文件里面的内容

cd ..               //返回上一级目录

cd filename         // 进入当前位置下的 某个目录

mkdir bbb           // 创建bbb文件夹

cp <--要复制的文件名字--> <--目录名/文件名-->      // 复制一个文件  cp a.text aaa/b.text  

cp -R <--要复制的目录名字--> <--目录名-->    // 复制一个文件夹  cp -R aaa bbb


```
## 在windows操作系统使用linux命令
cygwin 软件

## Web服务器基础原理和概念
ubuntu 安装 lnmp建站软件

https://lnmp.org/

安装在usr/local/web 目录下