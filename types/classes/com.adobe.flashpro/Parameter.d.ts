/// <reference path="../../packages/com.adobe.flashpro/references.d.ts"/>

declare namespace Adobe {
	namespace Flashpro {
		/**
		 * The Parameter object type is accessed from the 
		 * Screen.parameters array. It is also accessed by the 
		 * Component.parameters array.
		 */
		class Parameter extends Adobe.Csawlib.CSHostObject {
			/**
			 * The category property for the ScreenParameter or 
			 * componentInstance.parameters. The property is in a 
			 * particular category. Can be used for alternative ways to 
			 * present a list of parameters for screens. Possibly in the 
			 * wizard.
			 * @type {string}
			 */
			public category: string;
			/**
			 * The value of the selected list item if the parameter is of 
			 * type List. It is a read/writable property.
			 * @type {number}
			 */
			public listIndex: number;
			/**
			 * The name of the parameter.
			 * @type {string}
			 * @readonly
			 */
			public readonly name: string;
			/**
			 * This is a very interesting property. It can be a string or 
			 * an array depending on the type of parameter. parameter can 
			 * be of many types: 
			 *    Array 
			 *    Object 
			 *    List 
			 *    String 
			 *    Number 
			 *    Boolean 
			 *    Font Name 
			 *    Color
			 * See this spec for more info: 
			 * omedia.com/FlashMX2/specs/Components/Component_Authoring.cfm
			 * @type {any}
			 */
			public value: any;
			/**
			 * The type of this screen/component parameter. Can be one of 
			 * the following:
			 *    Array 
			 *    Object 
			 *    List 
			 *    String 
			 *    Number 
			 *    Boolean 
			 *    Font Name 
			 *    Color 
			 *    Collection 
			 *    Web Service Url 
			 *    Web Service Operation
			 * @type {string}
			 * @readonly
			 */
			public readonly valueType: string;
			/**
			 * The verbose property of the ScreenParameter.
			 * @type {number}
			 */
			public verbose: number;
			/**
			 * If the Parameter is of type List, Object or Array, then the 
			 * value property is an array. To insert a value to the array, 
			 * you must use the insertItem method.
			 * @param {number} index The index of where this item will be 
			 * inserted into the List, Object or Array. If index is 0, it 
			 * will go at the beginning of the list and the other items 
			 * will be shifted higher. If index is > the list size, then 
			 * the new item will be at the end of the array.
			 * @param {string} name The name of the newly inserted item. It 
			 * is a required argument, but only used if the Parameter is of 
			 * type Object.
			 * @param {string} value the value of the new item inserted.
			 * @param {string} _type The type of item to insert.
			 * @returns {void}
			 */
			public insertItem(index: number, name: string, value: string, _type: string): void;
			/**
			 * To remove an element of the List, Object or Array type of 
			 * Screen or Component Parameter, use the removeItem method.
			 * @param {number} index The index of the item to remove from 
			 * the Screen or Component Property.
			 * @returns {void}
			 */
			public removeItem(index: number): void;
		}
	}
}