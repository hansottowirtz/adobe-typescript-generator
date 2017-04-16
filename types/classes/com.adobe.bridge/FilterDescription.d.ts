/// <reference path="../../packages/com.adobe.bridge/references.d.ts"/>

declare namespace Adobe {
	namespace Bridge {
		/**
		 * Filters are applied to children of a container node when 
		 * Adobe Bridge needs to display that container's contents in 
		 * the Content pane, or display a list of children in a menu. A 
		 * filter description identifies a metadata property (from 
		 * embedded XMP metadata) or a node property (from a 
		 * node-handler-defined Infoset Object) to display in the 
		 * Filter palette. The Filter palette displays each filter 
		 * property, with a line under each property for each value it 
		 * finds for that property in any child node. The filter 
		 * description can provide a narrower list of allowed values to 
		 * display for an XMP property, if the property has a closed 
		 * value list.When the user selects a filter, a child node is 
		 * displayed only if it contains the selected filter property 
		 * and value.The list of filter objects that Adobe Bridge uses 
		 * by default to populate the Filter palette is kept in  
		 * app.defaultFilterCriteria. When displaying a handled 
		 * container node, Adobe Bridge builds the list of filters by 
		 * calling the developer-defined getFilterCriteria() method of 
		 * the node's ExtensionModel object. Your implementation of 
		 * this method can create these filter objects, and use them to 
		 * replace, modify, or add to the default list.
		 */
		class FilterDescription extends Adobe.Csawlib.CSHostObject {
			/**
			 * The set of allowed values for the XMP property, if it has a 
			 * closed value list.
			 * @type {any[]}
			 */
			public closedValueList: any[];
			/**
			 * A localized name for this filter, shown in the heading line 
			 * for this filter in the Filter pane.
			 * @type {string}
			 */
			public displayName: string;
			/**
			 * The data type of filter-property value, used in sorting the 
			 * list of values.
			 * @type {string}
			 */
			public filterType: string;
			/**
			 * The name of the node property to use as a filter, as defined 
			 * in the InfosetMemberDescription object.
			 * @type {string}
			 */
			public infosetMember: string;
			/**
			 * When true, only one of the filter values can be set at a 
			 * time.
			 * @type {boolean}
			 */
			public isExclusive: boolean;
			/**
			 * The unique identifying name of the filter.
			 * @type {string}
			 */
			public name: string;
			/**
			 * The namespace of the XMP property used as a filter.
			 * @type {string}
			 */
			public xmpNamespace: string;
			/**
			 * The key name of the XMP property used as a filter.
			 * @type {string}
			 */
			public xmpProperty: string;
			/**
			 * @returns {void}
			 */
			public constructor();
			/**
			 * @param {any[]} args
			 * @returns {void}
			 */
			protected createWithArgs(args: any[]): void;
		}
	}
}