import SQLite from 'react-native-sqlite-storage';

let db = SQLite.openDatabase({name: 'In8it.db'});
SQLite.enablePromise(true);

export const createTable = async (tableName: string, columns: string[]) => {
  return new Promise<void>(async resolve => {
    try {
      if (columns.length === 0) {
        console.log('No columns to create table.');
        return;
      }
      const sanitizedColumns = columns.map(column => {
        // Prepend an underscore if the column name starts with a number
        if (/^[0-9]/.test(column)) {
          return `_${column}`;
        }
        return column;
      });

      const createTableQuery = `
        CREATE TABLE IF NOT EXISTS ${tableName} (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          ${sanitizedColumns.map(column => `${column} TEXT`).join(',')}
        );
      `;
      (await db).transaction(tx => {
        tx.executeSql(createTableQuery, [], (_, _result) => {
          console.log(
            'Table created successfully',
            tableName,
            sanitizedColumns,
          );
          console.log(`Table ${tableName} created successfully`);
          resolve();
        });
      });
    } catch (e) {
      console.error('Error creating table:', e);
      resolve();
    }
  });
};

export const insertData = async (tableName: string, dataArray: any) => {
  return new Promise<void>(async resolve => {
    try {
      if (dataArray.length === 0) {
        console.log('No data to insert.');
        resolve();
        return;
      }

      const columns = Object.keys(dataArray[0]);
      const insertQuery = `
        INSERT INTO ${tableName} (${columns.join(', ')})
        VALUES (${columns.map(() => '?').join(', ')})
      `;

      (await db).transaction(tx => {
        dataArray.forEach(data => {
          const values = columns.map(column => {
            return JSON.stringify(data[column]);
          });
          tx.executeSql(insertQuery, values, (_, _result) => {
            resolve();
          });
        });
      });
    } catch (e) {
      console.error('Error inserting data:', e);
      resolve();
    }
  });
};
export const checkIsTableEmpty = async () => {
  const businessList = await getAllData('businessList');
  if (businessList.length > 0) {
    console.log('Data is available');
  } else {
    console.log('Data is NOT  available');
  }
};
export const getAllData = async (tableName: string): Promise<any[]> => {
  return new Promise<any[]>(async resolve => {
    try {
      const selectQuery = `SELECT * FROM ${tableName};`;

      (await db).transaction(tx => {
        tx.executeSql(selectQuery, [], (_, result) => {
          const rows = result.rows;
          const data: any[] = [];
          for (let i = 0; i < rows.length; i++) {
            data.push(rows.item(i));
          }
          resolve(data);
        });
      });
    } catch (e) {
      console.error('Error retrieving data:', e);
      resolve([]);
    }
  });
};
