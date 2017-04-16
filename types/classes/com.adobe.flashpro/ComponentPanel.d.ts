/// <reference path="../../packages/com.adobe.flashpro/index.d.ts"/>

declare namespace Adobe {
	namespace Flashpro {
		/**
		 * The ComponentPanel object is a property of the flash object 
		 * which represents the component panel and can be accessed by: 
		 * fl.componentsPanel
		 */
		class ComponentPanel extends Adobe.Csawlib.CSHostObject {
			/**
			 * Adds the component (in specified category and with specified 
			 * name) to the document at the specified position.
			 * @param {any} position x/y location to add component. 
			 * References the center point of the component's bounding box.
			 * @param {string} categoryName Name of the component category.
			 * @param {string} componentName Name of the component in a 
			 * given category (see argument #2).
			 * @param {string} replaceFlag This flag specify whether to 
			 * replace the component or not. And also to show or not the 
			 * alert.
			 */
			public addItemToDocument(position: any, categoryName: string, componentName: string, replaceFlag: string): void;
			/**
			 * Refreshes the Components Panel's list of Components from 
			 * disk.
			 */
			public reload(): boolean;
		}
	}
}