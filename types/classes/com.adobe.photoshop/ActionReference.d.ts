/// <reference path="../../namespaces/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class ActionReference extends Adobe.CsawlibPhotoshop.PhotoshopHostObject {
			public getContainer(): Adobe.Photoshop.ActionReference;
			public getDesiredClass(): number;
			/**
			 * Get type of enumeration of an ActionReference whose form is 
			 * 'Enumerated'
			 */
			public getEnumeratedType(): number;
			/**
			 * Get value of enumeration of an ActionReference whose form is 
			 * 'Enumerated'
			 */
			public getEnumeratedValue(): number;
			/** Get form of ActionReference */
			public getForm(): Adobe.Photoshop.ReferenceFormType;
			/**
			 * Get identifier value for an ActionReference whoxse form is 
			 * 'Identifier'
			 */
			public getIdentifier(): number;
			/**
			 * Get index value for an ActionReference whoxse form is 
			 * 'Index'
			 */
			public getIndex(): number;
			/** Get name value for an ActionReference whoxse form is 'Name' */
			public getName(): string;
			/**
			 * Get offset value for an ActionReference whoxse form is 
			 * 'Offset'
			 */
			public getOffset(): number;
			/**
			 * Get property ID value for an ActionReference whoxse form is 
			 * 'Property'
			 */
			public getProperty(): number;
			/**
			 * @param {number} desiredClass - ID of class
			 */
			public putClass(desiredClass: number): void;
			/**
			 * @param {number} desiredClass - ID of class
			 * @param {number} enumType - Type of enumeration
			 * @param {number} value - enumeration value
			 */
			public putEnumerated(desiredClass: number, enumType: number, value: number): void;
			/**
			 * @param {number} desiredClass - ID of class
			 * @param {number} value - 
			 */
			public putIdentifier(desiredClass: number, value: number): void;
			/**
			 * @param {number} desiredClass - ID of class
			 * @param {number} value - 
			 */
			public putIndex(desiredClass: number, value: number): void;
			/**
			 * @param {number} desiredClass - ID of class
			 * @param {string} value - 
			 */
			public putName(desiredClass: number, value: string): void;
			/**
			 * @param {number} desiredClass - ID of class
			 * @param {number} value - 
			 */
			public putOffset(desiredClass: number, value: number): void;
			/**
			 * @param {number} desiredClass - ID of class
			 * @param {number} value - 
			 */
			public putProperty(desiredClass: number, value: number): void;
		}
	}
}