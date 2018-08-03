import pandas
import sys

dataframe = pandas.read_csv(sys.argv[1])


output_list = []
column_names = list(dataframe.columns)
for row_number in range(len(dataframe)):
	row = {}
	for column_name in column_names:
		row[column_name] = dataframe.iloc[row_number][column_name]
	output_list.append(row)

with open(sys.argv[2], 'w+') as output_file:
	output_file.write(str(output_list))