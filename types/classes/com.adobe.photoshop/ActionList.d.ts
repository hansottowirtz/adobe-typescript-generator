/// <reference path="../../namespaces/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class ActionList extends Adobe.CsawlibPhotoshop.PhotoshopHostObject {
			/** number of items in the list */
			public readonly count: number;
			/** Clear the list */
			public clear(): void;
			/**
			 * Get the value of an item of type boolean
			 * @param {number} index - 
			 */
			public getBoolean(index: number): boolean;
			/**
			 * Get the value of an item of type class
			 * @param {number} index - 
			 */
			public getClass(index: number): number;
			/**
			 * Get raw byte data as a String
			 * @param {number} index - 
			 */
			public getData(index: number): string;
			/**
			 * Get the value of an item of type double
			 * @param {number} index - 
			 */
			public getDouble(index: number): number;
			/**
			 * Get the enumeration type of an item
			 * @param {number} index - 
			 */
			public getEnumerationType(index: number): number;
			/**
			 * Get the enumeration value of an item
			 * @param {number} index - 
			 */
			public getEnumerationValue(index: number): number;
			/**
			 * Get the value of an item of type integer
			 * @param {number} index - 
			 */
			public getInteger(index: number): number;
			/**
			 * Get the value of an item of type list
			 * @param {number} index - 
			 */
			public getList(index: number): Adobe.Photoshop.ActionList;
			/**
			 * Get the class ID of an object in an item of type object
			 * @param {number} index - 
			 */
			public getObjectType(index: number): number;
			/**
			 * Get the value of an item of type object
			 * @param {number} index - 
			 */
			public getObjectValue(index: number): Adobe.Photoshop.ActionDescriptor;
			/**
			 * Get the value of an item of type Alias
			 * @param {number} index - 
			 */
			public getPath(index: number): File;
			/**
			 * Get the value of an item of type ActionReference
			 * @param {number} index - 
			 */
			public getReference(index: number): Adobe.Photoshop.ActionReference;
			/**
			 * Get the value of an item of type string
			 * @param {number} index - 
			 */
			public getString(index: number): string;
			/**
			 * Get the type of an item
			 * @param {number} index - 
			 */
			public getType(index: number): Adobe.Photoshop.DescValueType;
			/**
			 * Get the unit type of an item of type UnitDouble
			 * @param {number} index - 
			 */
			public getUnitDoubleType(index: number): number;
			/**
			 * Get the value of anm item of type UnitDouble
			 * @param {number} index - 
			 */
			public getUnitDoubleValue(index: number): number;
			/**
			 * @param {boolean} value - 
			 */
			public putBoolean(value: boolean): void;
			/**
			 * @param {number} value - 
			 */
			public putClass(value: number): void;
			/**
			 * Put raw byte data as a String
			 * @param {string} value - 
			 */
			public putData(value: string): void;
			/**
			 * @param {number} value - 
			 */
			public putDouble(value: number): void;
			/**
			 * @param {number} enumType - 
			 * @param {number} value - 
			 */
			public putEnumerated(enumType: number, value: number): void;
			/**
			 * @param {number} value - 
			 */
			public putInteger(value: number): void;
			/**
			 * @param {Adobe.Photoshop.ActionList} value - 
			 */
			public putList(value: Adobe.Photoshop.ActionList): void;
			/**
			 * @param {number} classID - 
			 * @param {Adobe.Photoshop.ActionDescriptor} value - 
			 */
			public putObject(classID: number, value: Adobe.Photoshop.ActionDescriptor): void;
			/**
			 * @param {Adobe.Flash.Filesystem.File} value - 
			 */
			public putPath(value: Adobe.Flash.Filesystem.File): void;
			/**
			 * @param {Adobe.Photoshop.ActionReference} value - 
			 */
			public putReference(value: Adobe.Photoshop.ActionReference): void;
			/**
			 * @param {string} value - 
			 */
			public putString(value: string): void;
			/**
			 * @param {number} unitID - 
			 * @param {number} value - 
			 */
			public putUnitDouble(unitID: number, value: number): void;
		}
	}
}