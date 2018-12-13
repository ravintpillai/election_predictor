import pandas
import sklearn
from sklearn.linear_model import LogisticRegression as LR

training_table = pandas.read_csv("training_table_elections.csv")
labels = training_table['LABEL (WINNER)']
training_table = training_table.drop(['LABEL (WINNER)', 'ons_id'], axis=1)

def blow_out_columns(table,columns):
	my_table = table
	for column in columns:
		possible_values = set(table[column])
		print column, len(possible_values)
		for value in possible_values:
			my_table['IS_'+value+'_'+column]=my_table[column]==value
		my_table.drop(column, axis=1)
	return my_table

columns_to_blow_out = ['CURRENT HOLDING PARTY', 'PREVIOUS HOLDING PARTY', 'REGION', 'COUNTRY', 'CONSTITUENCY_TYPE']

final_tt = blow_out_columns(training_table, columns_to_blow_out)

final_tt = final_tt.drop('CONSTITUENCY', axis=1)
final_tt = final_tt.drop('COUNTY', axis=1)
final_tt = final_tt.drop(columns_to_blow_out, axis=1)
classifier = LR()

classification_algorithm = classifier.fit(final_tt, labels)
print classification_algorithm.score(final_tt, labels)
