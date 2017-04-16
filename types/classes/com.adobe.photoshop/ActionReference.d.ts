/// <reference path="../../packages/com.adobe.photoshop/references.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class ActionReference extends Adobe.CsawlibPhotoshop.PhotoshopHostObject {
			/**
			 * @returns {Adobe.Photoshop.ActionReference}
			 */
			public getContainer(): Adobe.Photoshop.ActionReference;
			/**
			 * @returns {number}
			 */
			public getDesiredClass(): number;
			/**
			 * Get type of enumeration of an ActionReference whose form is 
			 * 'Enumerated'
			 * @returns {number}
			 */
			public getEnumeratedType(): number;
			/**
			 * Get value of enumeration of an ActionReference whose form is 
			 * 'Enumerated'
			 * @returns {number}
			 */
			public getEnumeratedValue(): number;
			/**
			 * Get form of ActionReference
			 * @returns {Adobe.Photoshop.ReferenceFormType}
			 */
			public getForm(): Adobe.Photoshop.ReferenceFormType;
			/**
			 * Get identifier value for an ActionReference whoxse form is 
			 * 'Identifier'
			 * @returns {number}
			 */
			public getIdentifier(): number;
			/**
			 * Get index value for an ActionReference whoxse form is 
			 * 'Index'
			 * @returns {number}
			 */
			public getIndex(): number;
			/**
			 * Get name value for an ActionReference whoxse form is 'Name'
			 * @returns {string}
			 */
			public getName(): string;
			/**
			 * Get offset value for an ActionReference whoxse form is 
			 * 'Offset'
			 * @returns {number}
			 */
			public getOffset(): number;
			/**
			 * Get property ID value for an ActionReference whoxse form is 
			 * 'Property'
			 * @returns {number}
			 */
			public getProperty(): number;
			/**
			 * @param {number} desiredClass ID of class
			 * @returns {void}
			 */
			public putClass(desiredClass: number): void;
			/**
			 * @param {number} desiredClass ID of class
			 * @param {number} enumType Type of enumeration
			 * @param {number} value enumeration value
			 * @returns {void}
			 */
			public putEnumerated(desiredClass: number, enumType: number, value: number): void;
			/**
			 * @param {number} desiredClass ID of class
			 * @param {number} value 
			 * @returns {void}
			 */
			public putIdentifier(desiredClass: number, value: number): void;
			/**
			 * @param {number} desiredClass ID of class
			 * @param {number} value 
			 * @returns {void}
			 */
			public putIndex(desiredClass: number, value: number): void;
			/**
			 * @param {number} desiredClass ID of class
			 * @param {string} value 
			 * @returns {void}
			 */
			public putName(desiredClass: number, value: string): void;
			/**
			 * @param {number} desiredClass ID of class
			 * @param {number} value 
			 * @returns {void}
			 */
			public putOffset(desiredClass: number, value: number): void;
			/**
			 * @param {number} desiredClass ID of class
			 * @param {number} value 
			 * @returns {void}
			 */
			public putProperty(desiredClass: number, value: number): void;
		}
	}
}