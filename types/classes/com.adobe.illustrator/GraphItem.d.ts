/// <reference path="../../packages/com.adobe.illustrator/references.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		/** Graph artwork item */
		class GraphItem extends Adobe.Illustrator.PageItem {
			/**
			 * the content variable bound to this graph
			 * @type {any}
			 */
			public contentVariable: any;
		}
	}
}