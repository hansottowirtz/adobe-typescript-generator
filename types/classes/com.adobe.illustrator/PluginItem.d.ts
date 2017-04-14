/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>
declare namespace Adobe {
	namespace Illustrator {
		class PluginItem extends Adobe.Illustrator.PageItem {
			/** Is the plugin group a tracing? */
			public readonly isTracing: boolean;
			/** The tracing object associated with this plugin item. */
			public readonly tracing: Adobe.Illustrator.TracingObject;
		}
	}
}