/// <reference path="../../packages/com.adobe.photoshop/references.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class ActionDescriptor extends Adobe.CsawlibPhotoshop.PhotoshopHostObject {
			/**
			 * number of keys contained in the descriptor
			 * @type {number}
			 * @readonly
			 */
			public readonly count: number;
			/**
			 * Clear the descriptor
			 * @returns {void}
			 */
			public clear(): void;
			/**
			 * Erase a key from the descriptor
			 * @param {number} key ID of key to erase
			 * @returns {void}
			 */
			public erase(key: number): void;
			/**
			 * Create descriptor from the given ID. Only use with Flash 
			 * Panel interface.
			 * @param {number} value 
			 * @returns {void}
			 */
			public fromID(value: number): void;
			/**
			 * Create descriptor from stream of bytes. For reading from 
			 * disk.
			 * @param {string} value 
			 * @returns {void}
			 */
			public fromStream(value: string): void;
			/**
			 * Get the value of a key of type boolean
			 * @param {number} key 
			 * @returns {boolean}
			 */
			public getBoolean(key: number): boolean;
			/**
			 * Get the value of a key of type class
			 * @param {number} key 
			 * @returns {number}
			 */
			public getClass(key: number): number;
			/**
			 * Get raw byte data as a String
			 * @param {number} key 
			 * @returns {string}
			 */
			public getData(key: number): string;
			/**
			 * Get the value of a key of type double
			 * @param {number} key 
			 * @returns {number}
			 */
			public getDouble(key: number): number;
			/**
			 * Get the enumeration type of a key
			 * @param {number} key 
			 * @returns {number}
			 */
			public getEnumerationType(key: number): number;
			/**
			 * Get the enumeration value of a key
			 * @param {number} key 
			 * @returns {number}
			 */
			public getEnumerationValue(key: number): number;
			/**
			 * Get the value of a key of type integer
			 * @param {number} key 
			 * @returns {number}
			 */
			public getInteger(key: number): number;
			/**
			 * Get ID of the Nth key
			 * @param {number} index 
			 * @returns {number}
			 */
			public getKey(index: number): number;
			/**
			 * Get the value of a key of type large integer
			 * @param {number} key 
			 * @returns {number}
			 */
			public getLargeInteger(key: number): number;
			/**
			 * Get the value of a key of type list
			 * @param {number} key 
			 * @returns {Adobe.Photoshop.ActionList}
			 */
			public getList(key: number): Adobe.Photoshop.ActionList;
			/**
			 * Get the class ID of an object in a key of type object
			 * @param {number} key 
			 * @returns {number}
			 */
			public getObjectType(key: number): number;
			/**
			 * Get the value of a key of type object
			 * @param {number} key 
			 * @returns {Adobe.Photoshop.ActionDescriptor}
			 */
			public getObjectValue(key: number): Adobe.Photoshop.ActionDescriptor;
			/**
			 * Get the value of a key of type Alias
			 * @param {number} key 
			 * @returns {File}
			 */
			public getPath(key: number): File;
			/**
			 * Get the value of a key of type ActionReference
			 * @param {number} key 
			 * @returns {Adobe.Photoshop.ActionReference}
			 */
			public getReference(key: number): Adobe.Photoshop.ActionReference;
			/**
			 * Get the value of a key of type string
			 * @param {number} key 
			 * @returns {string}
			 */
			public getString(key: number): string;
			/**
			 * Get the type of a key
			 * @param {number} key 
			 * @returns {Adobe.Photoshop.DescValueType}
			 */
			public getType(key: number): Adobe.Photoshop.DescValueType;
			/**
			 * Get the unit type of a key of type UnitDouble
			 * @param {number} key 
			 * @returns {number}
			 */
			public getUnitDoubleType(key: number): number;
			/**
			 * Get the value of a key of type UnitDouble
			 * @param {number} key 
			 * @returns {number}
			 */
			public getUnitDoubleValue(key: number): number;
			/**
			 * does the descriptor contain the provided key?
			 * @param {number} key 
			 * @returns {boolean}
			 */
			public hasKey(key: number): boolean;
			/**
			 * @param {Adobe.Photoshop.ActionDescriptor} otherDesc 
			 * @returns {boolean}
			 */
			public isEqual(otherDesc: Adobe.Photoshop.ActionDescriptor): boolean;
			/**
			 * @param {number} key 
			 * @param {boolean} value 
			 * @returns {void}
			 */
			public putBoolean(key: number, value: boolean): void;
			/**
			 * @param {number} key 
			 * @param {number} value 
			 * @returns {void}
			 */
			public putClass(key: number, value: number): void;
			/**
			 * Put raw byte data as a String
			 * @param {number} key 
			 * @param {string} value 
			 * @returns {void}
			 */
			public putData(key: number, value: string): void;
			/**
			 * @param {number} key 
			 * @param {number} value 
			 * @returns {void}
			 */
			public putDouble(key: number, value: number): void;
			/**
			 * @param {number} key 
			 * @param {number} enumType 
			 * @param {number} value 
			 * @returns {void}
			 */
			public putEnumerated(key: number, enumType: number, value: number): void;
			/**
			 * @param {number} key 
			 * @param {number} value 
			 * @returns {void}
			 */
			public putInteger(key: number, value: number): void;
			/**
			 * @param {number} key 
			 * @param {number} value 
			 * @returns {void}
			 */
			public putLargeInteger(key: number, value: number): void;
			/**
			 * @param {number} key 
			 * @param {Adobe.Photoshop.ActionList} value 
			 * @returns {void}
			 */
			public putList(key: number, value: Adobe.Photoshop.ActionList): void;
			/**
			 * @param {number} key 
			 * @param {number} classID 
			 * @param {Adobe.Photoshop.ActionDescriptor} value 
			 * @returns {void}
			 */
			public putObject(key: number, classID: number, value: Adobe.Photoshop.ActionDescriptor): void;
			/**
			 * @param {number} key 
			 * @param {File} value 
			 * @returns {void}
			 */
			public putPath(key: number, value: File): void;
			/**
			 * @param {number} key 
			 * @param {Adobe.Photoshop.ActionReference} value 
			 * @returns {void}
			 */
			public putReference(key: number, value: Adobe.Photoshop.ActionReference): void;
			/**
			 * @param {number} key 
			 * @param {string} value 
			 * @returns {void}
			 */
			public putString(key: number, value: string): void;
			/**
			 * @param {number} key 
			 * @param {number} unitID 
			 * @param {number} value 
			 * @returns {void}
			 */
			public putUnitDouble(key: number, unitID: number, value: number): void;
			/**
			 * Get entire descriptor as a stream of bytes. For writing to 
			 * disk.
			 * @returns {string}
			 */
			public toStream(): string;
		}
	}
}