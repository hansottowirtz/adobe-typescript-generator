/// <reference path="../../namespaces/com.adobe.illustrator/index.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		/** Graph artwork item. */
		class GraphItem extends Adobe.Illustrator.PageItem {
			/** The content variable bound to this graph. */
			public contentVariable: any;
		}
	}
}