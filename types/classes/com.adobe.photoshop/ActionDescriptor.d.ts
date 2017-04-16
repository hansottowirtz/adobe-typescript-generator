/// <reference path="../../packages/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class ActionDescriptor extends Adobe.CsawlibPhotoshop.PhotoshopHostObject {
			/** number of keys contained in the descriptor */
			public readonly count: number;
			/** Clear the descriptor */
			public clear(): void;
			/**
			 * Erase a key from the descriptor
			 * @param {number} key ID of key to erase
			 */
			public erase(key: number): void;
			/**
			 * Create descriptor from the given ID. Only use with Flash 
			 * Panel interface.
			 * @param {number} value 
			 */
			public fromID(value: number): void;
			/**
			 * Create descriptor from stream of bytes. For reading from 
			 * disk.
			 * @param {string} value 
			 */
			public fromStream(value: string): void;
			/**
			 * Get the value of a key of type boolean
			 * @param {number} key 
			 */
			public getBoolean(key: number): boolean;
			/**
			 * Get the value of a key of type class
			 * @param {number} key 
			 */
			public getClass(key: number): number;
			/**
			 * Get raw byte data as a String
			 * @param {number} key 
			 */
			public getData(key: number): string;
			/**
			 * Get the value of a key of type double
			 * @param {number} key 
			 */
			public getDouble(key: number): number;
			/**
			 * Get the enumeration type of a key
			 * @param {number} key 
			 */
			public getEnumerationType(key: number): number;
			/**
			 * Get the enumeration value of a key
			 * @param {number} key 
			 */
			public getEnumerationValue(key: number): number;
			/**
			 * Get the value of a key of type integer
			 * @param {number} key 
			 */
			public getInteger(key: number): number;
			/**
			 * Get ID of the Nth key
			 * @param {number} index 
			 */
			public getKey(index: number): number;
			/**
			 * Get the value of a key of type large integer
			 * @param {number} key 
			 */
			public getLargeInteger(key: number): number;
			/**
			 * Get the value of a key of type list
			 * @param {number} key 
			 */
			public getList(key: number): Adobe.Photoshop.ActionList;
			/**
			 * Get the class ID of an object in a key of type object
			 * @param {number} key 
			 */
			public getObjectType(key: number): number;
			/**
			 * Get the value of a key of type object
			 * @param {number} key 
			 */
			public getObjectValue(key: number): Adobe.Photoshop.ActionDescriptor;
			/**
			 * Get the value of a key of type Alias
			 * @param {number} key 
			 */
			public getPath(key: number): File;
			/**
			 * Get the value of a key of type ActionReference
			 * @param {number} key 
			 */
			public getReference(key: number): Adobe.Photoshop.ActionReference;
			/**
			 * Get the value of a key of type string
			 * @param {number} key 
			 */
			public getString(key: number): string;
			/**
			 * Get the type of a key
			 * @param {number} key 
			 */
			public getType(key: number): Adobe.Photoshop.DescValueType;
			/**
			 * Get the unit type of a key of type UnitDouble
			 * @param {number} key 
			 */
			public getUnitDoubleType(key: number): number;
			/**
			 * Get the value of a key of type UnitDouble
			 * @param {number} key 
			 */
			public getUnitDoubleValue(key: number): number;
			/**
			 * does the descriptor contain the provided key?
			 * @param {number} key 
			 */
			public hasKey(key: number): boolean;
			/**
			 * @param {Adobe.Photoshop.ActionDescriptor} otherDesc 
			 */
			public isEqual(otherDesc: Adobe.Photoshop.ActionDescriptor): boolean;
			/**
			 * @param {number} key 
			 * @param {boolean} value 
			 */
			public putBoolean(key: number, value: boolean): void;
			/**
			 * @param {number} key 
			 * @param {number} value 
			 */
			public putClass(key: number, value: number): void;
			/**
			 * Put raw byte data as a String
			 * @param {number} key 
			 * @param {string} value 
			 */
			public putData(key: number, value: string): void;
			/**
			 * @param {number} key 
			 * @param {number} value 
			 */
			public putDouble(key: number, value: number): void;
			/**
			 * @param {number} key 
			 * @param {number} enumType 
			 * @param {number} value 
			 */
			public putEnumerated(key: number, enumType: number, value: number): void;
			/**
			 * @param {number} key 
			 * @param {number} value 
			 */
			public putInteger(key: number, value: number): void;
			/**
			 * @param {number} key 
			 * @param {number} value 
			 */
			public putLargeInteger(key: number, value: number): void;
			/**
			 * @param {number} key 
			 * @param {Adobe.Photoshop.ActionList} value 
			 */
			public putList(key: number, value: Adobe.Photoshop.ActionList): void;
			/**
			 * @param {number} key 
			 * @param {number} classID 
			 * @param {Adobe.Photoshop.ActionDescriptor} value 
			 */
			public putObject(key: number, classID: number, value: Adobe.Photoshop.ActionDescriptor): void;
			/**
			 * @param {number} key 
			 * @param {File} value 
			 */
			public putPath(key: number, value: File): void;
			/**
			 * @param {number} key 
			 * @param {Adobe.Photoshop.ActionReference} value 
			 */
			public putReference(key: number, value: Adobe.Photoshop.ActionReference): void;
			/**
			 * @param {number} key 
			 * @param {string} value 
			 */
			public putString(key: number, value: string): void;
			/**
			 * @param {number} key 
			 * @param {number} unitID 
			 * @param {number} value 
			 */
			public putUnitDouble(key: number, unitID: number, value: number): void;
			/**
			 * Get entire descriptor as a stream of bytes. For writing to 
			 * disk.
			 */
			public toStream(): string;
		}
	}
}