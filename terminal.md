## Terminal Basics

### Cheatsheet:
https://ryanstutorials.net/linuxtutorial/cheatsheet.php


A command line, or terminal, is a text based interface to the system.

_Within_ a terminal you have what is known as a shell. 
This is a part of the operating system that defines how the terminal will 
behave and looks after running (or executing) commands for you. 
most common one is BASH -Bourne Again SHell. 

Use _echo_ to display a system variable stating your current shell.

>echo $SHELL
>>/bin/bash

Shortcuts
If you would like to know how many recent commands are being remembered you may use a command called echo to 
display a system variable stating your history size. echo is a command which is used to display messages.

>echo $HISTSIZE
>>1000
 
>pwd 

Print Working Directory

>file

obtain information about what type of file a file or directory is.

> ls -a

List the contents of a directory, including hidden files.

> mkdir [options] <Directory>
> >rmdir [options] <Directory>

useful options available for mkdir:

 **-p** <p>
    tells mkdir to make parent directories as needed (demonstration of what that actually means below). 

 **-v** <p>
    makes mkdir tell us what it is doing (as you saw in the example above, it normally does not).

#### Basics summary:

``` 
mkdir

    Make Directory - ie. Create a directory.
rmdir
    
    Remove Directory - ie. Delete a directory.
touch
    
    Create a blank file.
cp
    
    Copy - ie. Copy a file or directory.
mv
    
    Move - ie. Move a file or directory (can also be used to rename).
rm
    
    Remove - ie. Delete a file.

man <command> 
    Look up the manual page for a particular command.

man -k <search term> 
    Do a keyword search for all manual pages containing the given search term.

/<term> 
    Within a manual page, perform a search for 'term'

n
    After performing a search within a manual page, select the next found item.
```
### Paths

Absolute paths specify a location (file or directory) in relation to the root directory. You can identify them easily as they always begin with a forward slash ( / )

Relative paths specify a location (file or directory) in relation to where we currently are in the system. 
They will not begin with a slash.

>~ (tilde) - This is a shortcut for your home directory. eg, if your home directory is /home/ryan then you could refer to the directory Documents with the path /home/ryan/Documents or ~/Documents <P>
. (dot) - This is a reference to your current directory. . It could also be written as ./Documents <P>
.. (dotdot)- This is a reference to the parent directory.
> 

### FIles 

Everything is a file under Linux Even directories!
Linux is an extensionless system  Files can have any extension they like or none at all.
Linux is case sensitive  Beware of silly typos.