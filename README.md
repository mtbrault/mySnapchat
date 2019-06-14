# My Snapchat 

The aim of this project is to recode snapchat like, using a given API.

## POST /inscription
Request header:
{
  " Content - Type ": " application / json "
}
Request body:
{
  " email ": " nom@domain . fr " ,
  " password ": "***"
}
Response:
OK
{
  " data ":
  {
    " email ": " nom@domain . fr "
  }
}
KO
{
  " data ": " error message "
}


## POST /connection
Request header:
{
  " Content - Type ": " application / json "
}
Request body:
{
  " email ": " nom@domain . fr " ,
  " password ": "***"
}
Response:
OK
{
" data ":
  {
    " email ": " nom@domain . fr " ,
    " token ": "2522 AEF676FF25E6 "
  }
}
KO
{
  " data ": " error message "
}
