/// <reference path="../../packages/com.adobe.flashpro/references.d.ts"/>

declare namespace Adobe {
	namespace Flashpro {
		/**
		 * Component Instance is a sub class of Symbol Instance, 
		 * representing a component in the frame. In addition to all 
		 * the Symbol Instance object properties, the following 
		 * properties are available:Please refer to the Components 
		 * Spec, if viewing the timeline spec.
		 */
		class ComponentInstance extends Adobe.Flashpro.SymbolInstance {
			/**
			 * The fields property of the componentInstance object is an 
			 * array of schema objects
			 * @type {any[]}
			 * @readonly
			 */
			public readonly fields: any[];
			/**
			 * The AS 2.0 properties accessable from the Components PI. 
			 * Also see Parameters object.
			 * @type {any[]}
			 * @readonly
			 */
			public readonly parameters: any[];
		}
	}
}