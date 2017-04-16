/// <reference path="../../packages/com.adobe.photoshop/references.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class ActionList extends Adobe.CsawlibPhotoshop.PhotoshopHostObject {
			/**
			 * number of items in the list
			 * @type {number}
			 * @readonly
			 */
			public readonly count: number;
			/**
			 * Clear the list
			 * @returns {void}
			 */
			public clear(): void;
			/**
			 * Get the value of an item of type boolean
			 * @param {number} index 
			 * @returns {boolean}
			 */
			public getBoolean(index: number): boolean;
			/**
			 * Get the value of an item of type class
			 * @param {number} index 
			 * @returns {number}
			 */
			public getClass(index: number): number;
			/**
			 * Get raw byte data as a String
			 * @param {number} index 
			 * @returns {string}
			 */
			public getData(index: number): string;
			/**
			 * Get the value of an item of type double
			 * @param {number} index 
			 * @returns {number}
			 */
			public getDouble(index: number): number;
			/**
			 * Get the enumeration type of an item
			 * @param {number} index 
			 * @returns {number}
			 */
			public getEnumerationType(index: number): number;
			/**
			 * Get the enumeration value of an item
			 * @param {number} index 
			 * @returns {number}
			 */
			public getEnumerationValue(index: number): number;
			/**
			 * Get the value of an item of type integer
			 * @param {number} index 
			 * @returns {number}
			 */
			public getInteger(index: number): number;
			/**
			 * Get the value of an item of type large integer
			 * @param {number} index 
			 * @returns {number}
			 */
			public getLargeInteger(index: number): number;
			/**
			 * Get the value of an item of type list
			 * @param {number} index 
			 * @returns {Adobe.Photoshop.ActionList}
			 */
			public getList(index: number): Adobe.Photoshop.ActionList;
			/**
			 * Get the class ID of an object in an item of type object
			 * @param {number} index 
			 * @returns {number}
			 */
			public getObjectType(index: number): number;
			/**
			 * Get the value of an item of type object
			 * @param {number} index 
			 * @returns {Adobe.Photoshop.ActionDescriptor}
			 */
			public getObjectValue(index: number): Adobe.Photoshop.ActionDescriptor;
			/**
			 * Get the value of an item of type Alias
			 * @param {number} index 
			 * @returns {File}
			 */
			public getPath(index: number): File;
			/**
			 * Get the value of an item of type ActionReference
			 * @param {number} index 
			 * @returns {Adobe.Photoshop.ActionReference}
			 */
			public getReference(index: number): Adobe.Photoshop.ActionReference;
			/**
			 * Get the value of an item of type string
			 * @param {number} index 
			 * @returns {string}
			 */
			public getString(index: number): string;
			/**
			 * Get the type of an item
			 * @param {number} index 
			 * @returns {Adobe.Photoshop.DescValueType}
			 */
			public getType(index: number): Adobe.Photoshop.DescValueType;
			/**
			 * Get the unit type of an item of type UnitDouble
			 * @param {number} index 
			 * @returns {number}
			 */
			public getUnitDoubleType(index: number): number;
			/**
			 * Get the value of anm item of type UnitDouble
			 * @param {number} index 
			 * @returns {number}
			 */
			public getUnitDoubleValue(index: number): number;
			/**
			 * @param {boolean} value 
			 * @returns {void}
			 */
			public putBoolean(value: boolean): void;
			/**
			 * @param {number} value 
			 * @returns {void}
			 */
			public putClass(value: number): void;
			/**
			 * Put raw byte data as a String
			 * @param {string} value 
			 * @returns {void}
			 */
			public putData(value: string): void;
			/**
			 * @param {number} value 
			 * @returns {void}
			 */
			public putDouble(value: number): void;
			/**
			 * @param {number} enumType 
			 * @param {number} value 
			 * @returns {void}
			 */
			public putEnumerated(enumType: number, value: number): void;
			/**
			 * @param {number} value 
			 * @returns {void}
			 */
			public putInteger(value: number): void;
			/**
			 * @param {number} value 
			 * @returns {void}
			 */
			public putLargeInteger(value: number): void;
			/**
			 * @param {Adobe.Photoshop.ActionList} value 
			 * @returns {void}
			 */
			public putList(value: Adobe.Photoshop.ActionList): void;
			/**
			 * @param {number} classID 
			 * @param {Adobe.Photoshop.ActionDescriptor} value 
			 * @returns {void}
			 */
			public putObject(classID: number, value: Adobe.Photoshop.ActionDescriptor): void;
			/**
			 * @param {File} value 
			 * @returns {void}
			 */
			public putPath(value: File): void;
			/**
			 * @param {Adobe.Photoshop.ActionReference} value 
			 * @returns {void}
			 */
			public putReference(value: Adobe.Photoshop.ActionReference): void;
			/**
			 * @param {string} value 
			 * @returns {void}
			 */
			public putString(value: string): void;
			/**
			 * @param {number} unitID 
			 * @param {number} value 
			 * @returns {void}
			 */
			public putUnitDouble(unitID: number, value: number): void;
		}
	}
}