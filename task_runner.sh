#! /bin/sh
echo "Starting Automated Performance Test"
#list all the files in the directory with the extension .yml and store them in an array
files=($(ls *.yml))
# loop through the array and run the test for each file
for file in "${files[@]}"
do
  echo "Running test for $file and generating report ${file:0:$(($n-4))}_report.json"
  #run the artillery test and generate the report
  n=${#file}
  artillery run $file -o ${file:0:$(($n-4))}_report.json
  artillery report ${file:0:$(($n-4))}_report.json
done
echo "Automated Performance Test Complete"
read -p "Press [Enter] key to exit..."
exit 0