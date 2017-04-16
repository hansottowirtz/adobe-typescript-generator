/// <reference path="../../packages/com.adobe.flashpro/references.d.ts"/>

declare namespace Adobe {
	namespace Flashpro {
		/**
		 * In addition to all the Element object properties, the 
		 * following properties are available:
		 */
		class Instance extends Adobe.Flashpro.Element {
			/**
			 * Type of Instance. Acceptable values are: "symbol", "bitmap", 
			 * "video", "embedded video", "linked video", and "compiled 
			 * clip"
			 * @type {string}
			 * @readonly
			 */
			public readonly instanceType: string;
			/**
			 * Library item used to instantiate this instance.  Note you 
			 * can only change this property to another libraryItem of the 
			 * same type.  (i.e. you cannot set a symbol instance to refer 
			 * to a bitmap)
			 * @type {any}
			 */
			public libraryItem: any;
		}
	}
}