Vue.component('crud-item', {
    props: {
        crud: Object,
        index: Number
    },
    template: `
        <tr>
            <th>{{crud.name}}</th>
            <th>{{crud.age}}</th>
            <th>{{crud.sex}}</th>
            <th><button @click="$emit('edit-item', index)">修改</button></th>
            <th><button @click="removeItem(index)">刪除</button></th>
        </tr>
    `,
    methods: {
        removeItem(index) {
            app.items.splice(index, 1);
        }
    }
})

var app = new Vue({
    el: '#app',
    data: {
        type: 'create',
        target: null,
        name: '',
        age: '',
        sex: '男',
        items: [{
                name: 'jae',
                age: 10,
                sex: '男'
            },
            {
                name: 'ollie',
                age: 11,
                sex: '女'
            },
            {
                name: 'frank',
                age: 12,
                sex: '男'
            },
            {
                name: 'jimmy',
                age: 13,
                sex: '男'
            },
            {
                name: 'geng',
                age: 14,
                sex: '男'
            },
            {
                name: 'ivan',
                age: 15,
                sex: '男'
            }
        ]
    },
    methods: {
        initInput() {
            this.name = '';
            this.age = '';
            this.sex = '男';
        },
        checkInput() {
            return (!this.name || !this.age | isNaN(+this.age))
        },
        operation() {
            if (this.checkInput()) {
                alert('請輸入正確資料');
                return;
            }
            if (this.type === 'create') {
                this.items.push({
                    name: this.name,
                    age: this.age,
                    sex: this.sex
                });
                this.initInput();
            } else {
                let target = this.items[this.target];
                target.name = this.name;
                target.age = this.age;
                target.sex = this.sex;
                this.initInput();
                this.target = null;
                this.type = 'create';
            }
        },
        editItem(index) {
            console.log(index);
            let target = this.items[index];
            this.type = 'confirm';
            this.name = target.name;
            this.age = target.age;
            this.sex = target.sex;
            this.target = index;
        }
    }
})