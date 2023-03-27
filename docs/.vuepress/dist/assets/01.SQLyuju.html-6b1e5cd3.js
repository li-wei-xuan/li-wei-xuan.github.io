import{_ as e,p as i,q as n,Y as d}from"./framework-aa5c4115.js";const a={},s=d('<h2 id="sql语句" tabindex="-1"><a class="header-anchor" href="#sql语句" aria-hidden="true">#</a> SQL语句</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>SQL (结构化查询语言)是用于执行查询的语法。\nSQL语言也包含用于更新、插入和删除记录的语法。\n注意：一定要记住，SQL 对大小写不敏感\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h2><h3 id="select-查询语句" tabindex="-1"><a class="header-anchor" href="#select-查询语句" aria-hidden="true">#</a> SELECT(查询语句)</h3><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>查询全部字段\n    SELECT * FROM `表`\n\n查某个字段\n    SELECT 字段1,字段2 FROM 表\n\n条件查询\n    SELECT * FROM `表` WHERE 条件\n\nAND\n    SELECT * FROM `表` WHERE 条件 and 条件\n\nOR\n    SELECT * FROM `表` WHERE 条件 or 条件\n\nBETWEEN\n    SELECT * FROM `表` WHERE `id` BETWEEN 5 AND 10\n    SELECT * FROM `表` WHERE `id` &gt;= 5 AND `id` &lt;= 10\n\nIN  \n    SELECT * FROM `表` WHERE `id` IN (1,3,6)\n\nNOT IN\n    SELECT * FROM `表` WHERE `id` NOT IN (1,3,6)\n\nLIMIT(start,end)\n    SELECT * FROM `表` LIMIT 5\n\n从第4条数据开始，只查询5条\n    SELECT * FROM `表` LIMIT 3,5\n\n排序（升序：asc，降序：desc）\n    SELECT * FROM `表` ORDER BY `id` DESC\n    SELECT * FROM `表` ORDER BY `id` ASC\n\nGROUP BY\n    SELECT * FROM `表` GROUP BY title\n\nlike\n    SELECT * FROM `表` WHERE `name` like &#39;%XXX%&#39;\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="insert-into-插入语句" tabindex="-1"><a class="header-anchor" href="#insert-into-插入语句" aria-hidden="true">#</a> INSERT INTO(插入语句)</h3><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>单条数据插入\n    INSERT INTO `表名`(`字段1`,`字段2`)VALUES(&#39;值1&#39;，&#39;值2&#39;)\n多条数据插入\n    INSERT INTO `表名`(`字段1`,`字段2`)VALUES(&#39;值1&#39;，‘值2’),(&#39;值1&#39;,&#39;值2&#39;)\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="update-更新语句" tabindex="-1"><a class="header-anchor" href="#update-更新语句" aria-hidden="true">#</a> UPDATE(更新语句)</h3><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>更新一个表的数据\n    UPDATE 表名 SET `字段1`=值1,`字段2`=值2,`字段n`=值n WHERE 条件\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="delete-删除语句" tabindex="-1"><a class="header-anchor" href="#delete-删除语句" aria-hidden="true">#</a> DELETE(删除语句)</h3><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>删除一条数据\n    DELETE FROM `表` WHERE 条件\n删除多条数据\n    DELETE FROM `表` WHERE `id` IN (&#39;值1&#39;,&#39;值2&#39;)\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="连表查询" tabindex="-1"><a class="header-anchor" href="#连表查询" aria-hidden="true">#</a> 连表查询</h2><h3 id="left-join-左连表" tabindex="-1"><a class="header-anchor" href="#left-join-左连表" aria-hidden="true">#</a> LEFT JOIN(左连表)</h3><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>以左边的表为基准，先把左边的表查出来，再查右边的表，若右边的表没对应的数据显示的就为NULL。\n\n例：\n    SELECT a.id,b.name FROM `user` as a LEFT JOIN `job` as b on a.id = b.user_id\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="left-join-左连表-1" tabindex="-1"><a class="header-anchor" href="#left-join-左连表-1" aria-hidden="true">#</a> LEFT JOIN(左连表)</h3><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>以右边的表为基准，先把右边的表查出来，再查左边的表，若左边的表没对应的数据显示的就为NULL。\n\n例：\n    SELECT b.id,a.name FROM `job` as a LEFT JOIN `user` as b on a.user_id = b.id\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="inner-join-内连表" tabindex="-1"><a class="header-anchor" href="#inner-join-内连表" aria-hidden="true">#</a> INNER JOIN(内连表)</h3><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>以两个表中有至少一个匹配，否则不显示\n这说明inner join并不以谁为基础,它只显示符合条件的记录。\n\n例：\n    SELECT a.id,b.name FROM `user` as a INNER JOIN `job` as b on a.id = b.user_id\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',18),l=[s];function r(v,c){return i(),n("div",null,l)}const b=e(a,[["render",r],["__file","01.SQLyuju.html.vue"]]);export{b as default};
