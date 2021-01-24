let products_list = ["Samsung Galaxy", "Sony Xperia", "Nokia6", "Apple iPhone 6S", "Oppo A71"]

function show_product() {
    let header = `<tr >
        <th > Product name </th>  
        <th > </th>  
        <th > </th>  
        </tr>`
    let table_content = header
    for (let i = 0; i < products_list.length; i++) {
        let product_row = `<tr>
                            <td>` + products_list[i] + `</td>
                            <td>
                                <button>Edit</button>
                            </td>
                            <td>
                                 <button>Delete</button>
                            </td>
                            </tr>`;
        table_content += product_row;
    }

    document.write("products_table").innerHTML = table_content;
}

function add_product(product_name) {
    products_list.push(product_name);
}

function btn_add_product() {
    let product_name = document.getElementById("product_name").value;
    add_product(product_name);
    show_product()
}